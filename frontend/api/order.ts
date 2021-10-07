import axios from "axios";
import { IFetchOrderRequest, IFetchOrderResponse } from "./types/order";

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
