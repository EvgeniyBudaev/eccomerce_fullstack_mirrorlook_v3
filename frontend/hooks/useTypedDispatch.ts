import { Action, ActionCreator, Dispatch } from "redux";
import { useDispatch as dispatchHook } from "react-redux";
import { ThunkAction } from "redux-thunk";
import {
  AppDispatch,
  AppThunk,
  RootState,
  TApplicationActions,
} from "ducks/types";

type TDispatch =
  | Dispatch
  | ActionCreator<ThunkAction<void, Action, RootState, TApplicationActions>>;

// Хук не даст отправить экшен, который ему не знаком
export const useDispatch = (): TDispatch =>
  dispatchHook<AppDispatch | AppThunk>();
