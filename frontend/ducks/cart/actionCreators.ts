import { ActionTypes } from "./actionTypes";
import { IActionCartCreate, IPayloadCartCreate } from "./types";

export const cartCreate = (payload: IPayloadCartCreate): IActionCartCreate => ({
  type: ActionTypes.CART_SET,
  payload,
});
