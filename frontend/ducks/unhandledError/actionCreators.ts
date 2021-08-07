import { AxiosError } from "axios";
import { SET_UNHANDLED_ERROR } from "./actionTypes";

export const setUnhandledError = (error: AxiosError) =>
  ({ type: SET_UNHANDLED_ERROR, payload: error } as const);
