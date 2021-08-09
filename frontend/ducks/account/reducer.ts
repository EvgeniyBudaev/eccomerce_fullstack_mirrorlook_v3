import { Reducer } from "redux";
import { IAccount } from "api/types/account";
import {
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESS,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  SET_USER_TOKEN,
  SET_USER,
  SIGNUP_USER,
} from "./actionTypes";

const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
};

export const reducer: Reducer<IAccount> = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    case SIGNUP_USER:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
      };
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
    case ACTIVATION_SUCCESS:
      return {
        ...state,
      };
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_FAIL:
    case ACTIVATION_FAIL:
      return {
        ...state,
      };
    default:
      return state;
  }
};
