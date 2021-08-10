import { IMirror } from "types/mirror";
import { IConsole } from "types/console";

export interface IBasket {
  entities: IMirror[] | IConsole[];
}

export interface IFetchAddToBasketResponse {
  item: IMirror | IConsole;
}
