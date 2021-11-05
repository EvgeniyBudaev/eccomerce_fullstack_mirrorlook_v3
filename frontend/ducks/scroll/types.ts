import { InferValueTypes } from "types/common";
import * as actions from "ducks/scroll/actionCreators";
import { ActionTypes } from "./actionTypes";

export type ScrollActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IActionScrollChange {
  type: ActionTypes.CHANGE_SCROLL;
  payload: IFetchScrollChangePayload;
}

export interface IFetchScrollChangePayload {
  isScroll: boolean;
}

export interface IFetchScrollChangeProps {
  payload: IFetchScrollChangePayload;
  type: string;
}

export interface IScrollState {
  isScroll: boolean;
}
