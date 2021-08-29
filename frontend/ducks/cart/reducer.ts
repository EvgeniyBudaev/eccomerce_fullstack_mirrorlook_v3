import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import {
  IActionCartAddItem,
  IActionCartCreate,
  IActionCartItemDecrement,
  IActionCartItemDelete,
  IActionCartItemIncrement,
  IPayloadCartItem,
} from "./types";

type IAction =
  | IActionCartCreate
  | IActionCartAddItem
  | IActionCartItemDecrement
  | IActionCartItemDelete
  | IActionCartItemIncrement;

interface IState {
  date_created: string;
  date_updated: string;
  entities: IPayloadCartItem[];
  id: number;
  user: number;
}

const initialState = {
  date_created: null,
  date_updated: null,
  entities: [],
  id: null,
  user: null,
};

export const reducer: Reducer<IState> = (
  state = typeof window !== "undefined"
    ? localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : initialState
    : initialState,
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
      if (state.entities.length !== 0) {
        const existItem = state.entities.find(
          item => item.product.id === action.payload.product.id
        );
        const cartItems = existItem
          ? state.entities.map(item =>
              item.product.id === existItem.product.id ? action.payload : item
            )
          : [...state.entities, action.payload];
        return {
          ...state,
          entities: cartItems,
        };
      } else {
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      }

    case ActionTypes.CART_ITEM_INCREMENT:
      if (state.entities.length !== 0) {
        const existItem = state.entities.find(
          item => item.product.id === action.payload.product.id
        );
        return {
          ...state,
          entities: state.entities.map(item =>
            item.product.id === existItem.product.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      }

    case ActionTypes.CART_ITEM_DECREMENT:
      if (state.entities.length !== 0) {
        const existItem = state.entities.find(
          item => item.product.id === action.payload.product.id
        );
        return {
          ...state,
          entities: state.entities.map(item =>
            item.product.id === existItem.product.id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          entities: [...state.entities, action.payload],
        };
      }

    case ActionTypes.CART_ITEM_DELETE:
      return {
        ...state,
        entities: state.entities.filter(item => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};
