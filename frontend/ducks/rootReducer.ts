import { combineReducers } from "@reduxjs/toolkit";
import { reducer as mirrors } from "ducks/products/mirrors/reducer";
import { reducer as consoles } from "ducks/products/consoles/reducer";

export const rootReducer = combineReducers({
  mirrors,
  consoles,
});

export type RootState = ReturnType<typeof rootReducer>;
