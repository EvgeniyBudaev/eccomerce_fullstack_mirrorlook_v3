import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";
import {
  IActionOrderRecipientSave,
  IActionOrderShippingAddressSave,
  IOrderState,
} from "./types";

type IAction = IActionOrderShippingAddressSave | IActionOrderRecipientSave;

const initialState = {
  order: null,
  recipient: null,
  shippingAddress: null,
};

export const reducer: Reducer<IOrderState> = (
  state = initialState,
  action: IAction
) => {
  switch (action.type) {
    case ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case ActionTypes.ORDER_RECIPIENT_SAVE:
      return {
        ...state,
        recipient: action.payload,
      };
    // case ActionTypes.ORDER_CREATE:
    //   return {
    //     ...state,
    //     order: action.payload,
    //   };
    default:
      return state;
  }
};
