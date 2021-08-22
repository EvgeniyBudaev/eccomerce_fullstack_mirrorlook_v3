import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import { IActionCartAddItem, IActionCartCreate } from "./types";

type IAction = IActionCartCreate | IActionCartAddItem;

interface IState {
  cart: number;
  date_created: string;
  date_updated: string;
  entities: any;
  id: number;
  user: number;
}

const initialState = {
  cart: null,
  date_created: null,
  date_updated: null,
  entities: [],
  id: null,
  user: null,
};

export const reducer: Reducer<IState> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.CART_SET:
      return {
        ...state,
        date_created: action.payload.date_created,
        date_updated: action.payload.date_updated,
        id: action.payload.id,
        user: action.payload.user,
      };
    case ActionTypes.CART_ADD_ITEM:
      return {
        ...state,
        entities: state.entities.length === 0 ? action.payload : null,
      };
    default:
      return state;
  }
};
