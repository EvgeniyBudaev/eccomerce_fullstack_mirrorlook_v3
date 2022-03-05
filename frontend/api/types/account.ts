export interface IUserAccount {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IAccount {
  access: string;
  isAuthenticated: boolean;
  isPasswordReset?: boolean;
  refresh: string;
  user: IUserAccount;
}

export interface IFetchUserResponse {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IFetchTokenResponse {
  access: string;
  refresh: string;
}

export interface IFetchSignupResponse {
  email: string;
  first_name: string;
  id: number;
  last_name: string;
  phone_number: string;
}

export interface IFetchCartUserSetResponse {
  date_created: string;
  date_updated: string;
  in: number;
  user: number;
}
