import { Reducer } from "redux";
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

const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
  error: null,
};

export const reducer: Reducer<any> = (state = initialState, action) => {
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
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        access: action.payload.access,
        refresh: action.payload.refresh,
        isAuthenticated: true,
      };
    case LOGIN_FAIL:
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
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case PASSWORD_RESET_SUCCESS:
    case PASSWORD_RESET_CONFIRM_SUCCESS:
      return {
        ...state,
      };
    case PASSWORD_RESET_FAIL:
    case PASSWORD_RESET_CONFIRM_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
