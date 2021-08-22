import * as actions from "ducks/cart/actionCreators";
import { InferValueTypes } from "types/common";
import { ActionTypes } from "./actionTypes";

export type CartActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type IPayloadCartCreate = {
  date_created: string;
  date_updated: string;
  id: number;
  user: number | null;
};

export interface IActionCartCreate {
  type: ActionTypes.CART_SET;
  payload: IPayloadCartCreate;
}

export type IPayloadCartAddItem = {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: number;
  quantity: number;
};

export interface IActionCartAddItem {
  type: ActionTypes.CART_ADD_ITEM;
  payload: IPayloadCartAddItem;
}

export interface IFetchCartCreateProps {
  payload: number;
  type: string;
}

export interface IFetchCartAddItemPayload {
  cart: number;
  product: number;
  quantity: number;
}

export interface IFetchCartAddItemProps {
  payload: IFetchCartAddItemPayload;
  type: string;
}
