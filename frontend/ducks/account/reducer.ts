import { Reducer } from "redux";
import { IAccount } from "api/types/account";
import { ActionTypes } from "./actionTypes";
import { AccountActionsType } from "./types";

const initialState: IAccount = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
  isPasswordChanged: false,
  isPasswordReset: false,
};

export const reducer: Reducer<IAccount, AccountActionsType> = (
  state = typeof window !== "undefined"
    ? localStorage.getItem("account")
      ? JSON.parse(localStorage.getItem("account"))
      : initialState
    : initialState,
  action
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
    case ActionTypes.SET_NEW_PASSWORD:
      return {
        ...state,
        isPasswordChanged: true,
      };
    case ActionTypes.SET_NEW_PASSWORD_CLEAR:
      return {
        ...state,
        isPasswordChanged: false,
      };
    default:
      return state;
  }
};
