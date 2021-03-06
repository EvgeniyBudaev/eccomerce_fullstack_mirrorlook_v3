import { IConsole } from "types/console";
import { IMirror } from "types/mirror";

export interface IFetchItemToCartResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IFetchItemsToCartResponse {
  data: IFetchItemToCartResponse[];
}

export interface IFetchCartCreateResponse {
  date_created: string;
  date_updated: string;
  id: number;
  user: number | null;
}

export interface IFetchAddItemToCartRequest {
  cart: number;
  product: number;
  quantity: number;
}

export interface IFetchAddItemToCartResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IFetchCartItemChangeRequest {
  id: number;
  quantity: number;
}

export interface IFetchCartItemIncrementRequest {
  id: number;
  quantity: number;
}

export interface IFetchCartItemChangeResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IFetchCartItemIncrementResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IFetchCartItemDecrementRequest {
  id: number;
  quantity: number;
}

export interface IFetchCartItemDecrementResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IFetchCartItemDeleteRequest {
  id: number;
}

export interface IFetchCartItemDeleteResponse {
  id: number;
}

export interface IFetchCartUserSetResponse {
  date_created: string;
  date_updated: string;
  id: number;
  user: number;
}
