import axios from "axios";
import { ActionTypes } from "./actionTypes";
import {
  IPayloadSetUserToken,
  IPayloadSetUser,
  IActionSetUserToken,
  IActionSetUser,
  IPayloadSignup,
  IActionUserSignup,
  IActionUserLogout,
} from "./types";

export const setUserToken = (
  payload: IPayloadSetUserToken
): IActionSetUserToken => ({
  type: ActionTypes.SET_USER_TOKEN,
  payload,
});

export const setUser = (payload: IPayloadSetUser): IActionSetUser => ({
  type: ActionTypes.SET_USER,
  payload,
});

export const signup = (payload: IPayloadSignup): IActionUserSignup => ({
  type: ActionTypes.SIGNUP_USER,
  payload,
});

export const verify = (uid, token: string) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });
  try {
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
    const response = await axios.post(
      `${baseUrl}api/v1/auth/users/activation/`,
      body,
      config
    );
    dispatch({
      type: ActionTypes.ACTIVATION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVATION_FAIL,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message,
    });
  }
};

export const logout = (): IActionUserLogout => ({
  type: ActionTypes.LOGOUT,
});

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
      const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
      const response = await axios.post(
        `${baseUrl}api/v1/auth/jwt/verify/`,
        body,
        config
      );
      if (response.data.code !== "token_not_valid") {
        dispatch({
          type: ActionTypes.AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: ActionTypes.AUTHENTICATED_FAIL,
        });
      }
    } catch (error) {
      dispatch({
        type: ActionTypes.AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: ActionTypes.AUTHENTICATED_SUCCESS,
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
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
    await axios.post(
      `${baseUrl}api/v1/auth/users/reset_password/`,
      body,
      config
    );
    dispatch({
      type: ActionTypes.PASSWORD_RESET_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.PASSWORD_RESET_FAIL,
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
      const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
      await axios.post(
        `${baseUrl}api/v1/auth/users/reset_password_confirm/`,
        body,
        config
      );
      dispatch({
        type: ActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ActionTypes.PASSWORD_RESET_CONFIRM_FAIL,
        payload:
          error.response && error.response.data.detail
            ? error.response.data.detail
            : error.message,
      });
    }
  };
