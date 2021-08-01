import { Reducer } from "redux";
import { IAccount } from "api/types/account";
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
import { AccountActionsType } from "./types";

const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
  error: null,
};

export const reducer: Reducer<IAccount> = (state = initialState, action) => {
  switch (action.type) {
    case AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        error: null,
      };
    case AUTHENTICATED_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
        error: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case SIGNUP_FAIL:
    case LOGOUT:
      return {
        ...state,
        access: null,
        refresh: null,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        user: null,
        error: action.payload,
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
        error: action.payload,
      };
    default:
      return state;
  }
};
