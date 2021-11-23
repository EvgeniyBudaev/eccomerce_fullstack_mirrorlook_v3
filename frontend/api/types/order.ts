import {
  IOrderItem,
  IPayloadOrderRecipientSave,
  IPayloadOrderShippingAddressSave,
} from "ducks/order";
import { IFetchUserResponse } from "./account";

export interface IFetchOrderRequest {
  is_delivered: boolean;
  is_paid: boolean;
  order_items: IOrderItem[];
  order_user: IPayloadOrderRecipientSave;
  payment_method: string;
  shipping_address: IPayloadOrderShippingAddressSave;
  shipping_price: number;
  tax_price: number;
  total_price: number;
}

export interface IOrderItemResponse {
  id: number;
  image: string;
  price: number;
  product: number;
  title: string;
  quantity: number;
}

export interface IOrderUserResponse {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IOrderShippingAddressResponse {
  address: string;
  apartment?: number;
  comment?: string;
  entrance?: number;
  id: number;
  intercom?: number;
  floor?: number;
}

export interface IFetchOrderResponse {
  date_created: string;
  date_updated: string;
  id: number;
  is_delivered: boolean;
  is_paid: boolean;
  order_items: IOrderItemResponse[];
  order_user: IOrderUserResponse;
  payment_method: string;
  shipping_address: IOrderShippingAddressResponse;
  shipping_price: number;
  tax_price: number;
  total_price: number;
  user: IFetchUserResponse | null;
}

export interface IFetchSendingConfirmOrderRequest {
  customer_email: string;
  message: string;
  subject: string;
}

export interface IFetchSendingConfirmOrderResponse {
  data: string;
}
