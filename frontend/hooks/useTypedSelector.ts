import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "ducks/rootReducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
