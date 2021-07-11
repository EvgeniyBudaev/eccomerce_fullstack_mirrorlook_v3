import { combineReducers } from "@reduxjs/toolkit";
import { reducer as mirrors } from "ducks/mirrors/reducer";

export const rootReducer = combineReducers({
  mirrors,
});

export type RootState = ReturnType<typeof rootReducer>;
