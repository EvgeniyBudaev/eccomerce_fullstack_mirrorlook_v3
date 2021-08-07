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
