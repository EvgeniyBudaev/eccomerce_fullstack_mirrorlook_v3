import axios from "axios";
import { backendBase } from "constants/paths";
import {
  IFetchOrderRequest,
  IFetchOrderResponse,
  IFetchSendingConfirmOrderRequest,
  IFetchSendingConfirmOrderResponse,
} from "./types/order";

export const fetchOrderCreate = async (
  order: IFetchOrderRequest
): Promise<IFetchOrderResponse> => {
  console.log("order", order);
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post<IFetchOrderResponse>(
    `${backendBase}api/v1/order/`,
    order,
    config
  );
  console.log("response.data", response.data);
  return response.data;
};

export const fetchSendingConfirmOrder = async (
  data: IFetchSendingConfirmOrderRequest
): Promise<IFetchSendingConfirmOrderResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await axios.post<IFetchSendingConfirmOrderResponse>(
    `${baseUrl}api/v1/sending-confirm-order/`,
    data,
    config
  );
  console.log("sending-confirm-order response", response);

  return response.data;
};

export const fetchOrderSendToEmail = async (
  isOrderResponse: boolean
): Promise<boolean> => {
  return isOrderResponse;
};
