import { Reducer } from "redux";
import { IAccount } from "api/types/account";
import { ActionTypes } from "./actionTypes";
import {
  IActionSetUserToken,
  IActionSetUser,
  IActionUserSignup,
} from "./types";

const initialState = {
  access: null,
  refresh: null,
  user: null,
  isAuthenticated: null,
};

type IAction = IActionSetUserToken | IActionSetUser | IActionUserSignup;

export const reducer: Reducer<IAccount> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    // case AUTHENTICATED_SUCCESS:
    //   return {
    //     ...state,
    //     isAuthenticated: true,
    //   };
    // case AUTHENTICATED_FAIL:
    //   return {
    //     ...state,
    //     isAuthenticated: false,
    //   };
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
    // case LOGOUT:
    //   return {
    //     ...state,
    //     access: null,
    //     refresh: null,
    //     user: null,
    //     isAuthenticated: false,
    //   };
    // case PASSWORD_RESET_SUCCESS:
    // case PASSWORD_RESET_CONFIRM_SUCCESS:
    // case ACTIVATION_SUCCESS:
    //   return {
    //     ...state,
    //   };
    // case PASSWORD_RESET_FAIL:
    // case PASSWORD_RESET_CONFIRM_FAIL:
    // case ACTIVATION_FAIL:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
