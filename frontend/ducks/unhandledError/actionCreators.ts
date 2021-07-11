import { SET_UNHANDLED_ERROR } from "./actionTypes";

export const setUnhandledError = (error: Error) =>
  ({ type: SET_UNHANDLED_ERROR, payload: error } as const);
