import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import { isEmpty } from "lodash";
import * as cartApi from "api/cart";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import { IFetchCartCreateResponse } from "api/types/cart";
import * as actionCreators from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { IFetchCartCreateProps } from "./types";

function* workerCartCreate({ payload }: IFetchCartCreateProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchCreateCart,
      payload ? payload : null
    )) as IFetchCartCreateResponse;
    yield put(actionCreators.cartCreate(response));
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
  yield all([takeLatest(ActionTypes.CART_CREATE, workerCartCreate)]);
}
