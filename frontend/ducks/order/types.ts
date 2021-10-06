import * as actions from "ducks/order/actionCreators";
import { InferValueTypes } from "types/common";
import { ActionTypes } from "ducks/order";

export type OrderActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IPayloadOrderShippingAddressSave {
  address: string;
  apartment?: number;
  comment?: string;
  entrance?: number;
  intercom?: number;
  floor?: number;
}

export interface IActionOrderShippingAddressSave {
  type: ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE;
  payload: IPayloadOrderShippingAddressSave;
}

export interface IFetchOrderShippingAddressSavePayload {
  address: string;
  apartment?: number;
  comment?: string;
  entrance?: number;
  intercom?: number;
  floor?: number;
}

export interface IFetchOrderShippingAddressSaveProps {
  payload: IFetchOrderShippingAddressSavePayload;
  type: string;
}

export interface IPayloadOrderRecipientSave {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface IActionOrderRecipientSave {
  type: ActionTypes.ORDER_RECIPIENT_SAVE;
  payload: IPayloadOrderRecipientSave;
}

export interface IFetchOrderRecipientSavePayload {
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface IFetchOrderRecipientSaveProps {
  payload: IFetchOrderRecipientSavePayload;
  type: string;
}

export interface IOrderState {
  order: null;
  recipient: IPayloadOrderRecipientSave;
  shippingAddress: IFetchOrderShippingAddressSavePayload;
}
