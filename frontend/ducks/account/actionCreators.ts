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
  IActionSetNewPassword,
  IActionSetNewPasswordClear,
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

export const logout = (): IActionUserLogout => ({
  type: ActionTypes.LOGOUT,
});

export const passwordReset = (): IActionPasswordReset => ({
  type: ActionTypes.PASSWORD_RESET,
});

export const passwordResetClear = (): IActionPasswordResetClear => ({
  type: ActionTypes.PASSWORD_RESET_CLEAR,
});

export const setNewPassword = (): IActionSetNewPassword => ({
  type: ActionTypes.SET_NEW_PASSWORD,
});

export const setNewPasswordClear = (): IActionSetNewPasswordClear => ({
  type: ActionTypes.SET_NEW_PASSWORD_CLEAR,
});
