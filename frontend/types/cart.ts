import { IConsole } from "./console";
import { IMirror } from "./mirror";

export type ICartItem = {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
};
