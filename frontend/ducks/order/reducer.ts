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
  order:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("order"))
      : null,
  order_user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("order_user"))
      : null,
  shipping_address:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("shipping_address"))
      : null,
  isOrderConfirmed: false,
};

export const reducer: Reducer<IOrderState> = (
  state = initialState,
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
        isOrderConfirmed: true,
      };
    default:
      return state;
  }
};
