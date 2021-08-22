import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as cartApi from "api/cart";
import { IFetchCartAddItemProps, IFetchCartCreateProps } from "ducks/cart";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import {
  IFetchAddItemToCartResponse,
  IFetchCartCreateResponse,
} from "api/types/cart";
import * as actionCreators from "./actionCreators";
import { ActionTypes } from "./actionTypes";

function* workerCartCreate({ payload }: IFetchCartCreateProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchCreateCart,
      payload ? payload : null
    )) as IFetchCartCreateResponse;
    localStorage.setItem("cart", JSON.stringify(response));
    yield put(actionCreators.cartCreate(response));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartInit() {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const cart = localStorage.getItem("cart");
    const response = JSON.parse(cart) as IFetchCartCreateResponse;
    yield put(actionCreators.cartCreate(response));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartAddItem({ payload }: IFetchCartAddItemProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchAddItemToCart,
      payload
    )) as IFetchAddItemToCartResponse;
    console.log("[saga][response]", response);
    yield put(actionCreators.cartAddItem(response));
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
  yield all([takeLatest(ActionTypes.CART_INIT, workerCartInit)]);
  yield all([takeLatest(ActionTypes.FETCH_CART_ADD_ITEM, workerCartAddItem)]);
}
