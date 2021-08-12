import { ActionTypes } from "./actionTypes";
import { IActionAddToBasket, IPayloadAddToBasket } from "./types";

export const addToBasket = (
  payload: IPayloadAddToBasket
): IActionAddToBasket => ({
  type: ActionTypes.BASKET_ADD_ITEM,
  payload,
});
