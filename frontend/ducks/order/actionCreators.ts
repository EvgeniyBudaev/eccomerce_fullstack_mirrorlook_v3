import {
  IActionOrderShippingAddressSave,
  IPayloadOrderShippingAddressSave,
} from "ducks/order";
import { ActionTypes } from "./actionTypes";

export const orderShippingSave = (
  payload: IPayloadOrderShippingAddressSave
): IActionOrderShippingAddressSave => ({
  type: ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE,
  payload,
});

export const orderCreate = (payload) => ({
  type: ActionTypes.ORDER_CREATE,
  payload,
});
