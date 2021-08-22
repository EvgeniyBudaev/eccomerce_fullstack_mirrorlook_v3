import { ActionTypes } from "./actionTypes";
import {
  IActionCartAddItem,
  IActionCartCreate,
  IPayloadCartAddItem,
  IPayloadCartCreate,
} from "./types";

export const cartCreate = (payload: IPayloadCartCreate): IActionCartCreate => ({
  type: ActionTypes.CART_SET,
  payload,
});

export const cartAddItem = (
  payload: IPayloadCartAddItem
): IActionCartAddItem => ({
  type: ActionTypes.CART_ADD_ITEM,
  payload,
});
