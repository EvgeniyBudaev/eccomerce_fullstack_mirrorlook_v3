import * as actions from "ducks/basket/actionCreators";
import { InferValueTypes } from "types/common";
import { IMirror } from "types/mirror";
import { IConsole } from "types/console";
import { ActionTypes } from "ducks/basket";

export type BasketActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type IPayloadAddToBasket = IMirror | IConsole;

export interface IActionAddToBasket {
  type: ActionTypes.BASKET_ADD_ITEM;
  payload: IPayloadAddToBasket;
}

export interface IFetchAddToBasketPayload {
  product_slug: string;
  catalog_slug: string;
}
export interface IFetchAddToBasketProps {
  payload: IFetchAddToBasketPayload;
  type: string;
}
