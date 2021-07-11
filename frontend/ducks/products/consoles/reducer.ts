import { Reducer } from "redux";
import { CONSOLES_SUCCESS } from "constants/products";
import { IConsole } from "types/console";
import { AccountActionsType } from "./actionTypes";

interface IProductsState {
  consoles: IConsole[];
}

const initialState: IProductsState = {
  consoles: [],
};

export const reducer: Reducer<IProductsState, AccountActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case CONSOLES_SUCCESS:
      return {
        ...state,
        consoles: action.payload,
      };
    default:
      return state;
  }
};
