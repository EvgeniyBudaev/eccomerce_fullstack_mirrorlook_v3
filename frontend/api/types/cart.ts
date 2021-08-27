import { IConsole } from "types/console";
import { IMirror } from "types/mirror";

export interface IFetchCartCreateResponse {
  date_created: string;
  date_updated: string;
  id: number;
  user: number | null;
}

export interface IFetchAddItemToCartResponse {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}
