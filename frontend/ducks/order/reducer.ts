import { Reducer } from "redux";
import { ActionTypes } from "./actionTypes";

const initialState = {
  shippingAddress: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shippingAddress: action.payload,
      };
    default:
      return state;
  }
};
