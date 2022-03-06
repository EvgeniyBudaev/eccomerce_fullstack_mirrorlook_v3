import { createSelector } from "reselect";
import { RootState } from "ducks/types";

export const loadingSelector = createSelector(
  (state: RootState) => state.loading,
  loading => loading
);
