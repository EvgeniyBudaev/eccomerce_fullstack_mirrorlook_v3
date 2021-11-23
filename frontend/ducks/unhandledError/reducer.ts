import { Reducer } from "redux";
import { AxiosError } from "axios";
import * as actionTypes from "./actionTypes";
import { UnhandledErrorActionsType } from "./types";

export interface IUnhandledErrorState {
  error: AxiosError | null;
}

const defaultState: IUnhandledErrorState = {
  error: null,
};

export const reducer: Reducer<IUnhandledErrorState, UnhandledErrorActionsType> =
  (state = defaultState, action): IUnhandledErrorState => {
    switch (action.type) {
      case actionTypes.SET_UNHANDLED_ERROR:
        return { ...state, error: action.payload };
      case actionTypes.SET_UNHANDLED_CLEAR_ERROR:
        return { ...state, error: null };
      default:
        return state;
    }
  };
