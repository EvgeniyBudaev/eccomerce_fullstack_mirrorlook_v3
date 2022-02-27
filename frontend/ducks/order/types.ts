import * as actions from "ducks/order/actionCreators";
import { InferValueTypes } from "types/common";
import { ActionTypes } from "ducks/order";
import {
  IFetchOrderResponse,
  IFetchSendingConfirmOrderRequest,
} from "api/types/order";

export type OrderActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IPayloadOrderShippingAddressSave {
  address: string;
  apartment?: string;
  comment?: string;
  entrance?: string;
  intercom?: string;
  floor?: string;
}

export interface IActionOrderShippingAddressSave {
  type: ActionTypes.ORDER_SHIPPING_ADDRESS_SAVE;
  payload: IPayloadOrderShippingAddressSave;
}

export interface IFetchOrderShippingAddressSavePayload {
  address: string;
  apartment?: string;
  comment?: string;
  entrance?: string;
  intercom?: string;
  floor?: string;
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

export interface IActionOrderCreate {
  type: ActionTypes.ORDER_CREATE;
  payload: IFetchOrderResponse;
}

export interface IActionOrderEmailSend {
  type: ActionTypes.ORDER_EMAIL_SENDED;
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
  isOrderConfirmed: boolean;
  isOrderEmailSended: boolean;
  order: IFetchOrderResponse;
  order_user: IPayloadOrderRecipientSave;
  shipping_address: IFetchOrderShippingAddressSavePayload;
}

export interface IOrderItem {
  image: string;
  price: number;
  product: number;
  title: string;
  quantity: number;
}

export interface IOrderPayload {
  is_delivered: boolean;
  is_paid: boolean;
  order_items: IOrderItem[];
  order_user: IPayloadOrderRecipientSave;
  payment_method: string;
  shipping_address: IPayloadOrderShippingAddressSave;
  shipping_price: number;
  tax_price: number;
  total_price: number;
  user?: string;
}

export interface IFetchOrderProps {
  payload: IOrderPayload;
  type: string;
}

export interface IFetchOrderSendToEmailProps {
  payload: IFetchSendingConfirmOrderRequest;
  type: string;
}
