import { BASKET_ADD_ITEM } from "./actionTypes";
import { IActionAddToBasketType } from "./types";

export const addToBasket = (payload: IActionAddToBasketType) =>
  ({
    type: BASKET_ADD_ITEM,
    payload,
  } as const);
