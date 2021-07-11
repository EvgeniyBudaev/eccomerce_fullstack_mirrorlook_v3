import { Reducer } from "redux";
import { MIRRORS_SUCCESS, MirrorsActionsType } from "ducks/products/mirrors";
import { IMirror } from "types/mirror";

interface IProductsState {
  mirrors: IMirror[];
}

const initialState: IProductsState = {
  mirrors: [],
};

export const reducer: Reducer<IProductsState, MirrorsActionsType> = (
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
