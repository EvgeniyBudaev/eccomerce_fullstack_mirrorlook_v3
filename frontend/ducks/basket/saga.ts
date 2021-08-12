import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as basketApi from "api/basket";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import { IFetchAddToBasketResponse } from "api/types/basket";
import * as actionCreators from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { IFetchAddToBasketProps } from "./types";

function* workerAddToBasket({ payload }: IFetchAddToBasketProps) {
  const { product_slug, catalog_slug } = payload;
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      basketApi.fetchAddToBasket,
      product_slug,
      catalog_slug
    )) as IFetchAddToBasketResponse;
    yield put(actionCreators.addToBasket(response));
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
  yield all([takeLatest(ActionTypes.FETCH_BASKET_ADD_ITEM, workerAddToBasket)]);
}
