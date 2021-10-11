import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import {
  IActionOrderCreate,
  IActionOrderRecipientSave,
  IActionOrderShippingAddressSave,
  IOrderState,
} from "./types";

type IAction =
  | IActionOrderShippingAddressSave
  | IActionOrderRecipientSave
  | IActionOrderCreate;

const initialState = {
  order: null,
  order_user: null,
  shipping_address: null,
};

export const reducer: Reducer<IOrderState> = (
  state = typeof window !== "undefined"
    ? localStorage.getItem("shipping")
      ? JSON.parse(localStorage.getItem("shipping"))
      : initialState
    : initialState,
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shipping_address: action.payload,
      };
    case ActionTypes.ORDER_RECIPIENT_SAVE:
      return {
        ...state,
        order_user: action.payload,
      };
    case ActionTypes.ORDER_CREATE:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
