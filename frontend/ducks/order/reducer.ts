import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import { IOrderState, OrderActionsType } from "./types";

const initialState: IOrderState = {
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
  isOrderEmailSended: false,
};

export const reducer: Reducer<IOrderState, OrderActionsType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shipping_address: action.payload,
        isOrderConfirmed: false,
        isOrderEmailSended: false,
      };
    case ActionTypes.ORDER_RECIPIENT_SAVE:
      return {
        ...state,
        order_user: action.payload,
        isOrderConfirmed: false,
        isOrderEmailSended: false,
      };
    case ActionTypes.ORDER_CREATE:
      return {
        ...state,
        order: action.payload,
        isOrderConfirmed: true,
      };
    case ActionTypes.ORDER_EMAIL_SENDED:
      return {
        ...state,
        isOrderEmailSended: true,
      };
    default:
      return state;
  }
};
