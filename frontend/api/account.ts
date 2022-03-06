import axios from "axios";
import { backendBase } from "constants/paths";
import {
  ISagaNewPasswordPayload,
  ISagaUserSignupPayload,
  ISagaUserVerifyPayload,
} from "ducks/account";
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
  const response = await axios.post<IFetchTokenResponse>(
    `${backendBase}api/v1/auth/jwt/create/`,
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
  const response = await axios.get<IFetchUserResponse>(
    `${backendBase}api/v1/auth/users/me/`,
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
  const response = await axios.post<IFetchSignupResponse>(
    `${backendBase}api/v1/auth/users/`,
    body,
    config
  );
  return response.data;
};

export const fetchUserActivation = async ({
  token,
  uid,
}: ISagaUserVerifyPayload): Promise<string> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    token,
    uid,
  });
  const response = await axios.post<string>(
    `${backendBase}api/v1/auth/users/activation/`,
    body,
    config
  );
  return response.data;
};

export const fetchLogout = (): string => {
  return "user logout";
};

export const fetchResetPassword = async (email: string): Promise<string> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email });
  const response = await axios.post(
    `${backendBase}api/v1/auth/users/reset_password/`,
    body,
    config
  );
  return response.status === 204
    ? "На email отправлено письмо с инструкцией как сбросить пароль"
    : response.data;
};

export const fetchNewPassword = async ({
  uid,
  token,
  new_password,
  re_new_password,
}: ISagaNewPasswordPayload): Promise<string> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ uid, token, new_password, re_new_password });
  const response = await axios.post(
    `${backendBase}api/v1/auth/users/reset_password_confirm/`,
    body,
    config
  );
  return response.status === 204 ? "Пароль успешно изменен" : response.data;
};
