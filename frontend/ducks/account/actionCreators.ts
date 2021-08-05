import axios from "axios";
import { IFetchUserResponse, ILoginResponse } from "api/types/account";
import {
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
} from "./actionTypes";

export const fetchUser = () => async dispatch => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };
    try {
      const response = await axios.get<IFetchUserResponse>(
        `http://127.0.0.1:8000/api/v1/auth/users/me/`,
        config
      );
      console.log("[fetchUser][response]", response);
      dispatch({
        type: FETCH_USER_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_USER_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  } else {
    dispatch({
      type: FETCH_USER_FAIL,
    });
  }
};

export const login = (email: string, password: string) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  console.log("[body]", body);
  try {
    const response = await axios.post<ILoginResponse>(
      `http://127.0.0.1:8000/api/v1/auth/jwt/create/`,
      body,
      config
    );
    console.log("[login][response]", response);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    } as const);
    localStorage.setItem("access", response.data.access);
    dispatch(fetchUser());
  } catch (error) {
    console.log("[error]", error);
    console.log("[error.response]", error.response);
    console.log("[error.response.data.detail]", error.response.data.detail);
    console.log("[error.message]", error.message);
    dispatch({
      type: LOGIN_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
};

export const signup =
  (
    first_name: string,
    last_name: string,
    phone_number: string,
    email: string,
    password: string,
    re_password: string
  ) =>
  async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      first_name,
      last_name,
      phone_number,
      email,
      password,
      re_password,
    });
    console.log("[signup][body]", body);
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/users/`,
        body,
        config
      );
      console.log("[signup][response]", response);
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      //localStorage.setItem("access", response.data.access);
    } catch (error) {
      console.log("[error]", error);
      console.log("[error.response]", error.response);
      console.log("[error.response.data]", error.response.data);
      console.log("[error.message]", error.message);
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data
            : error.message,
      });
      //localStorage.removeItem("access");
      //localStorage.removeItem("refresh");
    }
  };

export const verify = (uid, token: string) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/auth/users/activation/`,
      body,
      config
    );
    dispatch({
      type: ACTIVATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ACTIVATION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = () => dispatch => {
  dispatch({
    type: LOGOUT,
  });
};

export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };
    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/jwt/verify/`,
        body,
        config
      );
      if (response.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_SUCCESS,
    });
  }
};

export const reset_password = (email: string) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  try {
    await axios.post(
      `http://127.0.0.1:8000/api/v1/auth/users/reset_password/`,
      body,
      config
    );
    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const reset_password_confirm =
  (uid, token: string, new_password: string, re_new_password) =>
  async dispatch => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ uid, token, new_password, re_new_password });
    try {
      await axios.post(
        `http://127.0.0.1:8000/api/v1/auth/users/reset_password_confirm/`,
        body,
        config
      );
      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
