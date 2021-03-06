import axios from "axios";
import { backendBase } from "constants/paths";
import {
  IFetchAddItemToCartRequest,
  IFetchAddItemToCartResponse,
  IFetchCartCreateResponse,
  IFetchCartItemChangeRequest,
  IFetchCartItemChangeResponse,
  IFetchCartItemDecrementRequest,
  IFetchCartItemDecrementResponse,
  IFetchCartItemDeleteRequest,
  IFetchCartItemDeleteResponse,
  IFetchCartItemIncrementRequest,
  IFetchCartItemIncrementResponse,
  IFetchCartUserSetResponse,
} from "./types/cart";

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
      `${backendBase}api/v1/cart/`,
      body,
      config
    );

    return response.data;
  } else {
    const response = await axios.post<IFetchCartCreateResponse>(
      `${backendBase}api/v1/cart/`
    );

    return response.data;
  }
};

export const fetchAddItemToCart = async ({
  cart,
  product,
  quantity,
}: IFetchAddItemToCartRequest): Promise<IFetchAddItemToCartResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ cart, product, quantity });
  const response = await axios.post<IFetchAddItemToCartResponse>(
    `${backendBase}api/v1/cart-products/`,
    body,
    config
  );

  return response.data;
};

export const fetchChangeItemToCart = async ({
  id,
  quantity,
}: IFetchCartItemChangeRequest): Promise<IFetchCartItemChangeResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ quantity });
  const response = await axios.patch<IFetchCartItemChangeResponse>(
    `${backendBase}api/v1/cart-products/${id}/`,
    body,
    config
  );

  return response.data;
};

export const fetchIncrementItemToCart = async ({
  id,
  quantity,
}: IFetchCartItemIncrementRequest): Promise<IFetchCartItemIncrementResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ quantity });
  const response = await axios.patch<IFetchCartItemIncrementResponse>(
    `${backendBase}api/v1/cart-products/${id}/`,
    body,
    config
  );

  return response.data;
};

export const fetchDecrementItemToCart = async ({
  id,
  quantity,
}: IFetchCartItemDecrementRequest): Promise<IFetchCartItemDecrementResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ quantity });
  const response = await axios.patch<IFetchCartItemDecrementResponse>(
    `${backendBase}api/v1/cart-products/${id}/`,
    body,
    config
  );

  return response.data;
};

export const fetchDeleteItemToCart = async ({
  id,
}: IFetchCartItemDeleteRequest): Promise<IFetchCartItemDeleteResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  await axios.delete<IFetchCartItemDeleteResponse>(
    `${backendBase}api/v1/cart-products/${id}/`,
    config
  );

  return { id: id };
};

export const fetchSetUserToCart = async (
  cartId: number,
  userId: number
): Promise<IFetchCartUserSetResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ user: userId });
  const response = await axios.patch<IFetchCartUserSetResponse>(
    `${backendBase}api/v1/cart/${cartId}/`,
    body,
    config
  );

  return response.data;
};
