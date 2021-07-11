import { combineReducers } from "@reduxjs/toolkit";
import { reducer as mirrors, MirrorsActionsType } from "ducks/products/mirrors";
import {
  reducer as consoles,
  ConsolesActionsType,
} from "ducks/products/consoles";
import { reducer as loading, LoadingActionsType } from "ducks/loading";
import { UnhandledErrorActionsType } from "ducks/unhandledError";

export const rootReducer = combineReducers({
  mirrors,
  consoles,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;

export type ActionsType =
  | MirrorsActionsType
  | ConsolesActionsType
  | LoadingActionsType
  | UnhandledErrorActionsType;
