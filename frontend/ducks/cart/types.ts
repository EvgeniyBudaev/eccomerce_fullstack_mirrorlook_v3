import { IConsole } from "types/console";
import { IMirror } from "types/mirror";
import { ActionTypes } from "./actionTypes";

export interface IPayloadCartCreate {
  date_created: string;
  date_updated: string;
  id: number;
  user: number | null;
}

export interface IActionCartCreate {
  type: ActionTypes.CART_SET;
  payload: IPayloadCartCreate;
}

export interface IPayloadCartItem {
  cart: number;
  date_created: string;
  date_updated: string;
  id: number;
  product: IConsole | IMirror;
  quantity: number;
}

export interface IActionCartAddItem {
  type: ActionTypes.CART_ADD_ITEM;
  payload: IPayloadCartItem;
}

export interface IActionCartItemChange {
  type: ActionTypes.CART_ITEM_CHANGE;
  payload: IPayloadCartItem;
}

export interface IActionCartItemDecrement {
  type: ActionTypes.CART_ITEM_DECREMENT;
  payload: IPayloadCartItem;
}

export interface IActionCartItemIncrement {
  type: ActionTypes.CART_ITEM_INCREMENT;
  payload: IPayloadCartItem;
}

export interface IPayloadCartItemDelete {
  id: number;
}

export interface IActionCartItemDelete {
  type: ActionTypes.CART_ITEM_DELETE;
  payload: IPayloadCartItemDelete;
}

export interface IActionCartUserSet {
  type: ActionTypes.CART_USER_SET;
  payload: number;
}

export interface IActionCartClear {
  type: ActionTypes.CART_CLEAR;
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

export interface IFetchCartItemChangePayload {
  id: number;
  quantity: number;
}

export interface IFetchCartItemChangeProps {
  payload: IFetchCartItemChangePayload;
  type: string;
}

export interface IFetchCartItemIncrementPayload {
  id: number;
  quantity: number;
}

export interface IFetchCartItemIncrementProps {
  payload: IFetchCartItemIncrementPayload;
  type: string;
}

export interface IFetchCartItemDecrementPayload {
  id: number;
  quantity: number;
}

export interface IFetchCartItemDecrementProps {
  payload: IFetchCartItemDecrementPayload;
  type: string;
}

export interface IFetchCartItemDeletePayload {
  id: number;
}

export interface IFetchCartItemDeleteProps {
  payload: IFetchCartItemDeletePayload;
  type: string;
}

export interface ICartState {
  date_created: string;
  date_updated: string;
  entities: IPayloadCartItem[];
  id: number;
  user: number;
}

export type CartActionsType =
  | IActionCartCreate
  | IActionCartAddItem
  | IActionCartItemChange
  | IActionCartItemDecrement
  | IActionCartItemIncrement
  | IActionCartItemDelete
  | IActionCartUserSet
  | IActionCartClear;
