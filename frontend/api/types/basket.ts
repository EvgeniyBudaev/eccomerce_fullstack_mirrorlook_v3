import { IMirror } from "types/mirror";
import { IConsole } from "types/console";

export interface IBasket {
  entities: IMirror[] | IConsole[];
}

export type IFetchAddToBasketResponse = IMirror | IConsole;
