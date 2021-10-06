import {
  IActionOrderRecipientSave,
  IActionOrderShippingAddressSave,
  IPayloadOrderRecipientSave,
  IPayloadOrderShippingAddressSave,
} from "ducks/order";
import { ActionTypes } from "./actionTypes";

export const orderShippingSave = (
  payload: IPayloadOrderShippingAddressSave
): IActionOrderShippingAddressSave => ({
  type: ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE,
  payload,
});

export const orderRecipientSave = (
  payload: IPayloadOrderRecipientSave
): IActionOrderRecipientSave => ({
  type: ActionTypes.ORDER_RECIPIENT_SAVE,
  payload,
});

export const orderCreate = (payload) => ({
  type: ActionTypes.ORDER_CREATE,
  payload,
});
