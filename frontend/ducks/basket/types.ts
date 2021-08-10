import * as actions from "ducks/basket/actionCreators";
import { InferValueTypes } from "types/common";
import { IMirror } from "types/mirror";
import { IConsole } from "types/console";

export type BasketActionsType = ReturnType<InferValueTypes<typeof actions>>;

export interface IActionAddToBasketType {
  item: IMirror | IConsole;
}

export interface IFetchAddToBasketPayload {
  product_slug: string;
  catalog_slug: string;
}
export interface IFetchAddToBasketProps {
  payload: IFetchAddToBasketPayload;
  type: string;
}
