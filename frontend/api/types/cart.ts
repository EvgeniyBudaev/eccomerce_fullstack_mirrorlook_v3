import { IConsole } from "types/console";
import { IMirror } from "types/mirror";

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

export interface IFetchCartItemIncrementRequest {
  id: number;
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
