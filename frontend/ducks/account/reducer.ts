import { Reducer } from "redux";
import { IAccount } from "api/types/account";
import { ActionTypes } from "./actionTypes";
import {
  IActionSetUserToken,
  IActionSetUser,
  IActionUserSignup,
  IActionUserLogout,
  IActionPasswordReset,
  IActionPasswordResetClear,
} from "./types";

const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
  isPasswordReset: false,
};

type IAction =
  | IActionSetUserToken
  | IActionSetUser
  | IActionUserSignup
  | IActionUserLogout
  | IActionPasswordReset
  | IActionPasswordResetClear;

export const reducer: Reducer<IAccount> = (
  state = typeof window !== "undefined"
    ? localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : initialState
    : initialState,
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.SET_USER_TOKEN:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    case ActionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case ActionTypes.SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    case ActionTypes.LOGOUT:
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: null,
      };
    case ActionTypes.PASSWORD_RESET:
      return {
        ...state,
        isPasswordReset: true,
      };
    case ActionTypes.PASSWORD_RESET_CLEAR:
      return {
        ...state,
        isPasswordReset: false,
      };
    default:
      return state;
  }
};
