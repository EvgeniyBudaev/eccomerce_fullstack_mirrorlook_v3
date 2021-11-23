import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import { IActionScrollChange, IScrollState } from "./types";

type IAction = IActionScrollChange;

const initialState = {
  isScroll: false,
};

export const reducer: Reducer<IScrollState> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_SCROLL:
      return { ...state, isScroll: action.payload.isScroll };
    default:
      return state;
  }
};
