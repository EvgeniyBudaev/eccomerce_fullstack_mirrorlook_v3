import { SET_LOADING, UNSET_LOADING } from "./actionTypes";

export const setLoading = () => ({ type: SET_LOADING } as const);
export const unsetLoading = () => ({ type: UNSET_LOADING } as const);
