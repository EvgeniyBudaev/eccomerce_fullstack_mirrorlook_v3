import { useSelector as selector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "ducks/types";

export const useSelector: TypedUseSelectorHook<RootState> = selector;
