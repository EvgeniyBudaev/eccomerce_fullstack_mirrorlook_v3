import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const unhandledErrorSelector = createSelector(
  (state: RootState) => state.unhandledError,
  unhandledError => unhandledError
);
