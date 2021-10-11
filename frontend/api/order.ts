import axios from "axios";
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
    `http://127.0.0.1:8000/api/v1/order/`,
    order,
    config
  );

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
  const response = await axios.post<IFetchSendingConfirmOrderResponse>(
    `http://127.0.0.1:8000/api/v1/sending-confirm-order/`,
    data,
    config
  );
  console.log("response", response);

  return response.data;
};
