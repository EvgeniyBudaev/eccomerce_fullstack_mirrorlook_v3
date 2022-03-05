import axios from "axios";
import { backendBase } from "constants/paths";
import { ActionTypes } from "./actionTypes";
import {
  IPayloadSetUserToken,
  IPayloadSetUser,
  IActionSetUserToken,
  IActionSetUser,
  IPayloadSignup,
  IActionUserSignup,
  IActionUserLogout,
  IActionPasswordReset,
  IActionPasswordResetClear,
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

export const verify = (uid: string, token: string) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token });
  try {
    const response = await axios.post(
      `${backendBase}api/v1/auth/users/activation/`,
      body,
      config
    );
    dispatch({
      type: ActionTypes.ACTIVATION,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ActionTypes.ACTIVATION,
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
      const response = await axios.post(
        `${backendBase}api/v1/auth/jwt/verify/`,
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

export const passwordReset = (): IActionPasswordReset => ({
  type: ActionTypes.PASSWORD_RESET,
});

export const passwordResetClear = (): IActionPasswordResetClear => ({
  type: ActionTypes.PASSWORD_RESET_CLEAR,
});

// export const reset_password_confirm =
//   (uid, token: string, new_password: string, re_new_password) =>
//   async dispatch => {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = JSON.stringify({ uid, token, new_password, re_new_password });
//     try {
//       await axios.post(
//         `${backendBase}api/v1/auth/users/reset_password_confirm/`,
//         body,
//         config
//       );
//       dispatch({
//         type: ActionTypes.PASSWORD_RESET_CONFIRM_SUCCESS,
//       });
//     } catch (error) {
//       dispatch({
//         type: ActionTypes.PASSWORD_RESET_CONFIRM_FAIL,
//         payload:
//           error.response && error.response.data.detail
//             ? error.response.data.detail
//             : error.message,
//       });
//     }
//   };
