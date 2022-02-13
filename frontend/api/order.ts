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

  return response.data;
};

export const fetchSendingConfirmOrder = async (
  payload: IFetchSendingConfirmOrderRequest
): Promise<IFetchSendingConfirmOrderResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const response = await axios.post<IFetchSendingConfirmOrderResponse>(
    `${backendBase}api/v1/sending-confirm-order/`,
    payload,
    config
  );

  return response.data;
};

export const fetchOrderSendToEmail = async (
  isOrderResponse: boolean
): Promise<boolean> => {
  return isOrderResponse;
};
