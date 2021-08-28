import { ActionTypes } from "./actionTypes";
import {
  IActionCartAddItem,
  IActionCartCreate,
  IActionCartItemIncrement,
  IPayloadCartItem,
  IPayloadCartCreate,
  IActionCartItemDecrement,
} from "./types";

export const cartCreate = (payload: IPayloadCartCreate): IActionCartCreate => ({
  type: ActionTypes.CART_SET,
  payload,
});

export const cartAddItem = (payload: IPayloadCartItem): IActionCartAddItem => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload,
});

export const cartItemIncrement = (
  payload: IPayloadCartItem
): IActionCartItemIncrement => ({
  type: ActionTypes.CART_ITEM_INCREMENT,
  payload,
});

export const cartItemDecrement = (
  payload: IPayloadCartItem
): IActionCartItemDecrement => ({
  type: ActionTypes.CART_ITEM_DECREMENT,
  payload,
});
