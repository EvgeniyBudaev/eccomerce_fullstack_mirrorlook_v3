import { combineReducers } from "@reduxjs/toolkit";
import { reducer as account, AccountActionsType } from "ducks/account";
import { reducer as mirrors, MirrorsActionsType } from "ducks/products/mirrors";
import {
  reducer as consoles,
  ConsolesActionsType,
} from "ducks/products/consoles";
import { reducer as cart, CartActionsType } from "ducks/cart";
import { reducer as order, OrderActionsType } from "ducks/order";
import { reducer as scroll, ScrollActionsType } from "ducks/scroll";
import { reducer as loading, LoadingActionsType } from "ducks/loading";
import {
  reducer as unhandledError,
  UnhandledErrorActionsType,
} from "ducks/unhandledError";

export const rootReducer = combineReducers({
  account,
  mirrors,
  consoles,
  cart,
  order,
  scroll,
  loading,
  unhandledError,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ActionsType =
  | AccountActionsType
  | MirrorsActionsType
  | ConsolesActionsType
  | CartActionsType
  | OrderActionsType
  | ScrollActionsType
  | LoadingActionsType
  | UnhandledErrorActionsType;
