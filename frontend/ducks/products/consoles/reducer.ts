import { Reducer } from "redux";
import { IConsole } from "types/console";
import { CONSOLES_SUCCESS, ConsolesActionsType } from "ducks/products/consoles";

interface IProductsState {
  consoles: IConsole[];
}

const initialState: IProductsState = {
  consoles: [],
};

export const reducer: Reducer<IProductsState, ConsolesActionsType> = (
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
