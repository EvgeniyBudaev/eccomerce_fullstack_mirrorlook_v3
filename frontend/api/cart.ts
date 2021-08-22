import axios from "axios";
import { IFetchCartCreateResponse } from "./types/cart";

export const fetchCreateCart = async (
  user: number | null
): Promise<IFetchCartCreateResponse> => {
  if (user) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ user });
    const response = await axios.post<IFetchCartCreateResponse>(
      `http://127.0.0.1:8000/api/v1/cart/`,
      body,
      config
    );

    return response.data;
  } else {
    const response = await axios.post<IFetchCartCreateResponse>(
      `http://127.0.0.1:8000/api/v1/cart/`
    );

    return response.data;
  }
};
