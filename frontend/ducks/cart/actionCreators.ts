import { ActionTypes } from "./actionTypes";
import {
  IActionCartAddItem,
  IActionCartCreate,
  IActionCartItemIncrement,
  IPayloadCartItem,
  IPayloadCartCreate,
  IActionCartItemDecrement,
  IActionCartItemDelete,
  IPayloadCartItemDelete,
  IActionCartUserSet,
  IActionCartItemChange,
} from "./types";

export const cartCreate = (payload: IPayloadCartCreate): IActionCartCreate => ({
  type: ActionTypes.CART_SET,
  payload,
});

export const cartAddItem = (payload: IPayloadCartItem): IActionCartAddItem => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload,
});

export const cartItemChange = (
  payload: IPayloadCartItem
): IActionCartItemChange => ({
  type: ActionTypes.CART_ITEM_CHANGE,
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

export const cartItemDelete = (
  payload: IPayloadCartItemDelete
): IActionCartItemDelete => ({
  type: ActionTypes.CART_ITEM_DELETE,
  payload,
});

export const cartUserSet = (payload: number): IActionCartUserSet => ({
  type: ActionTypes.CART_USER_SET,
  payload,
});
