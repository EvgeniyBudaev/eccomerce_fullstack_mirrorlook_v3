import axios from "axios";
import {
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  SET_USER,
  SIGNUP_USER,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  SET_USER_TOKEN,
} from "./actionTypes";
import {
  IActionSetUserTokenType,
  IActionSetUserType,
  IActionSignupType,
} from "./types";

export const setUserToken = (payload: IActionSetUserTokenType) =>
  ({
    type: SET_USER_TOKEN,
    payload,
  } as const);

export const setUser = (payload: IActionSetUserType) =>
  ({
    type: SET_USER,
    payload,
  } as const);

export const signup = (payload: IActionSignupType) =>
  ({
    type: SIGNUP_USER,
    payload,
  } as const);

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
