import axios, { AxiosResponse } from "axios";
import { IFetchUserResponse, ITokenResponse } from "./types/account";

// export const login = async (
//   email: string,
//   password: string
// ): Promise<AxiosResponse<ILoginResponse>> => {
//   const body = JSON.stringify({ email, password });
//   return await axios.post<ILoginResponse>(
//     `http://127.0.0.1:8000/api/v1/auth/jwt/create/`,
//     body,
//     config
//   );
// };

export const fetchToken = async (
  email: string,
  password: string
): Promise<ITokenResponse> => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  const response = await axios.post<ITokenResponse>(
    `http://127.0.0.1:8000/api/v1/auth/jwt/create/`,
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
    `http://127.0.0.1:8000/api/v1/auth/users/me/`,
    config
  );
  return response.data;
};
