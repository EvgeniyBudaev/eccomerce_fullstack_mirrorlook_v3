import axios from "axios";
import { ISagaUserSignupPayload } from "ducks/account";
import {
  IFetchUserResponse,
  IFetchTokenResponse,
  IFetchSignupResponse,
} from "./types/account";

export const fetchToken = async (
  email: string,
  password: string
): Promise<IFetchTokenResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await axios.post<IFetchTokenResponse>(
    `${baseUrl}api/v1/auth/jwt/create/`,
    body,
    config
  );
  return response.data;
};

export const fetchUser = async (
  access: string
): Promise<IFetchUserResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access}`,
      Accept: "application/json",
    },
  };
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await axios.get<IFetchUserResponse>(
    `${baseUrl}api/v1/auth/users/me/`,
    config
  );
  return response.data;
};

export const fetchUserSignup = async ({
  first_name,
  last_name,
  phone_number,
  email,
  password,
  re_password,
}: ISagaUserSignupPayload): Promise<IFetchSignupResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    first_name,
    last_name,
    phone_number,
    email,
    password,
    re_password,
  });
  const baseUrl = process.env.NEXT_PUBLIC_DOMAIN;
  const response = await axios.post<IFetchSignupResponse>(
    `${baseUrl}api/v1/auth/users/`,
    body,
    config
  );
  return response.data;
};
