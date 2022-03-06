import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const cartSelector = createSelector(
  (state: RootState) => state.cart,
  cart => cart
);
