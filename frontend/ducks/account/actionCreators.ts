import axios from "axios";
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
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/auth/users/me/`,
        config
      );
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
  try {
    const response = await axios.post(
      `http://127.0.0.1:8000/api/v1/auth/jwt/create/`,
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
    localStorage.setItem("access", response.data.access);
    dispatch(fetchUser());
  } catch (error) {
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
