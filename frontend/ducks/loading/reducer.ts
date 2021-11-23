import { Reducer } from "redux";
import * as actionTypes from "./actionTypes";
import { LoadingActionsType } from "./types";

export interface ILoadingState {
  isLoading: boolean;
}

const defaultState = {
  isLoading: false,
};

export const reducer: Reducer<ILoadingState, LoadingActionsType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return { ...state, isLoading: true };
    case actionTypes.UNSET_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
