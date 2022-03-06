import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const scrollSelector = createSelector(
  (state: RootState) => state.scroll,
  scroll => scroll
);
