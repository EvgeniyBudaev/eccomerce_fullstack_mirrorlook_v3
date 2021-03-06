import { ActionTypes } from "./actionTypes";

export interface IPayloadSetUserToken {
  access: string;
  refresh: string;
}

export interface IPayloadSetUser {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IPayloadSignup {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IActionSetUserToken {
  type: ActionTypes.SET_USER_TOKEN;
  payload: IPayloadSetUserToken;
}

export interface IActionSetUser {
  type: ActionTypes.SET_USER;
  payload: IPayloadSetUser;
}

export interface IActionUserSignup {
  type: ActionTypes.SIGNUP_USER;
  payload: IPayloadSignup;
}

export interface ISagaUserTokenPayload {
  email: string;
  password: string;
}

export interface ISagaUserTokenProps {
  payload: ISagaUserTokenPayload;
  type: string;
}

export interface ISagaUserSignupPayload {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
  re_password: string;
}

export interface ISagaUserSignupProps {
  payload: ISagaUserSignupPayload;
  type: string;
}

export interface IActionUserLogout {
  type: ActionTypes.LOGOUT;
}

export interface IActionPasswordReset {
  type: ActionTypes.PASSWORD_RESET;
}

export interface IActionPasswordResetClear {
  type: ActionTypes.PASSWORD_RESET_CLEAR;
}

export interface IActionSetNewPassword {
  type: ActionTypes.SET_NEW_PASSWORD;
}

export interface IActionSetNewPasswordClear {
  type: ActionTypes.SET_NEW_PASSWORD_CLEAR;
}

export interface ISagaUserVerifyPayload {
  token: string;
  uid: string;
}

export interface ISagaUserVerifyProps {
  payload: ISagaUserVerifyPayload;
  type: string;
}
export interface ISagaUserResetPasswordProps {
  payload: string;
  type: string;
}

export interface ISagaUserResetPasswordClearProps {
  type: string;
}

export interface ISagaNewPasswordClearProps {
  type: string;
}

export interface ISagaNewPasswordPayload {
  uid: string;
  token: string;
  new_password: string;
  re_new_password: string;
}

export interface ISagaNewPasswordProps {
  payload: ISagaNewPasswordPayload;
  type: string;
}

export type AccountActionsType =
  | IActionSetUserToken
  | IActionSetUser
  | IActionUserSignup
  | IActionUserLogout
  | IActionPasswordReset
  | IActionPasswordResetClear
  | IActionSetNewPassword
  | IActionSetNewPasswordClear;
