import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const accountSelector = createSelector(
  (state: RootState) => state.account,
  account => account
);
