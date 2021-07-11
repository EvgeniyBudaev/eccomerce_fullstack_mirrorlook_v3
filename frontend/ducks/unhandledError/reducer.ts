import { Reducer } from "redux";
import * as actionTypes from "./actionTypes";
import { UnhandledErrorActionsType } from "./types";

export interface IUnhandledErrorState {
  error: Error | null;
}

const defaultState: IUnhandledErrorState = {
  error: null,
};

export const reducer: Reducer<IUnhandledErrorState, UnhandledErrorActionsType> =
  (state = defaultState, action): IUnhandledErrorState => {
    switch (action.type) {
      case actionTypes.SET_UNHANDLED_ERROR:
        return { ...state, error: action.payload };
      default:
        return state;
    }
  };
