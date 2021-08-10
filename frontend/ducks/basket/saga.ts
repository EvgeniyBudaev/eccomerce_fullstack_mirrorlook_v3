import { all, takeLatest, call, put } from "redux-saga/effects";
import * as basketApi from "api/basket";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import { IFetchAddToBasketResponse } from "api/types/basket";
import * as actionCreators from "./actionCreators";
import { FETCH_BASKET_ADD_ITEM } from "./actionTypes";
import { IFetchAddToBasketProps } from "./types";

function* fetchAddToBasket({ payload }: IFetchAddToBasketProps) {
  const { product_slug, catalog_slug } = payload;
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      basketApi.fetchAddToBasket,
      product_slug,
      catalog_slug
    )) as IFetchAddToBasketResponse;
    console.log("[response]", response);
    yield put(actionCreators.addToBasket(response));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watch() {
  yield all([takeLatest(FETCH_BASKET_ADD_ITEM, fetchAddToBasket)]);
}
