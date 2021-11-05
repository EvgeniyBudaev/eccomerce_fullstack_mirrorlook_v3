import {
  all,
  takeLatest,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import { setUnhandledError } from "../unhandledError";
import { setLoading, unsetLoading } from "../loading";
import * as actionCreators from "./actionCreators";
import { IFetchScrollChangeProps } from "./types";
import { ActionTypes } from ".";

function* workerScrollChange(props: IFetchScrollChangeProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    yield put(actionCreators.scrollChange(props.payload));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

export function* watch(): Generator<
  AllEffect<ForkEffect<never>>,
  void,
  unknown
> {
  yield all([takeLatest(ActionTypes.FETCH_SCROLL, workerScrollChange)]);
}
