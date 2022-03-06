import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const orderSelector = createSelector(
  (state: RootState) => state.order,
  order => order
);
