import { Reducer } from "redux";
import { MIRRORS_SUCCESS } from "constants/products";
import { IMirror } from "types/mirror";
import { AccountActionsType } from "./actionTypes";

interface IProductsState {
  mirrors: IMirror[];
}

const initialState: IProductsState = {
  mirrors: [],
};

export const reducer: Reducer<IProductsState, AccountActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case MIRRORS_SUCCESS:
      return {
        ...state,
        mirrors: action.payload,
      };
    default:
      return state;
  }
};
