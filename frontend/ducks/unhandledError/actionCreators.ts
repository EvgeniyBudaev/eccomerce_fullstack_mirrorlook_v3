import { AxiosError } from "axios";
import { SET_UNHANDLED_ERROR, SET_UNHANDLED_CLEAR_ERROR } from "./actionTypes";

export const setUnhandledError = (error: AxiosError) =>
  ({ type: SET_UNHANDLED_ERROR, payload: error } as const);

export const setUnhandledClearError = () =>
  ({ type: SET_UNHANDLED_CLEAR_ERROR } as const);
