import { ActionTypes } from "./actionTypes";
import { IActionScrollChange, IFetchScrollChangePayload } from "./types";

export const scrollChange = (
  payload: IFetchScrollChangePayload
): IActionScrollChange => ({
  type: ActionTypes.CHANGE_SCROLL,
  payload,
});
