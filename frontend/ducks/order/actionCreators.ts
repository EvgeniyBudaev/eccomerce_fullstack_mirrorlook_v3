import {
  IActionOrderCreate,
  IActionOrderEmailSend,
  IActionOrderRecipientSave,
  IActionOrderShippingAddressSave,
  IPayloadOrderRecipientSave,
  IPayloadOrderShippingAddressSave,
} from "ducks/order";
import { IFetchOrderResponse } from "api/types/order";
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

export const orderCreate = (
  payload: IFetchOrderResponse
): IActionOrderCreate => ({
  type: ActionTypes.ORDER_CREATE,
  payload,
});

export const orderEmailSended = (): IActionOrderEmailSend => ({
  type: ActionTypes.ORDER_EMAIL_SENDED,
});
