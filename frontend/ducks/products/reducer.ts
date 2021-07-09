import { Reducer } from "redux";
import { PRODUCTS_SUCCESS } from "constants/products";
import { IMirror } from "types/mirror";
import { AccountActionsType } from "./actionTypes";

interface IProductsState {
  mirrors: IMirror[];
}

const initialState: IProductsState = {
  mirrors: [],
};

export const productsReducer: Reducer<IProductsState, AccountActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        mirrors: action.payload,
      };
    default:
      return state;
  }
};
