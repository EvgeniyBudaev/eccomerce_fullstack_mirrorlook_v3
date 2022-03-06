import { combineReducers } from "@reduxjs/toolkit";
import { reducer as account } from "ducks/account";
import { reducer as cart } from "ducks/cart";
import { reducer as order } from "ducks/order";
import { reducer as scroll } from "ducks/scroll";
import { reducer as loading } from "ducks/loading";
import { reducer as unhandledError } from "ducks/unhandledError";

export const rootReducer = combineReducers({
  account,
  cart,
  order,
  scroll,
  loading,
  unhandledError,
});
