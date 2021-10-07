import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as cartApi from "api/cart";
import {
  IFetchCartAddItemProps,
  IFetchCartCreateProps,
  IFetchCartItemDecrementProps,
  IFetchCartItemIncrementProps,
  IFetchCartItemDeleteProps,
  IFetchCartItemChangeProps,
} from "ducks/cart";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import {
  IFetchAddItemToCartResponse,
  IFetchCartCreateResponse,
  IFetchCartItemChangeResponse,
  IFetchCartItemDecrementResponse,
  IFetchCartItemDeleteResponse,
  IFetchCartItemIncrementResponse,
} from "api/types/cart";
import { store } from "ducks/store";
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
    yield put(actionCreators.cartCreate(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
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
    yield put(actionCreators.cartAddItem(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartItemChange({ payload }: IFetchCartItemChangeProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchChangeItemToCart,
      payload
    )) as IFetchCartItemChangeResponse;
    yield put(actionCreators.cartItemChange(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartItemIncrement({ payload }: IFetchCartItemIncrementProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchIncrementItemToCart,
      payload
    )) as IFetchCartItemIncrementResponse;
    yield put(actionCreators.cartItemIncrement(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartItemDecrement({ payload }: IFetchCartItemDecrementProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchDecrementItemToCart,
      payload
    )) as IFetchCartItemDecrementResponse;
    yield put(actionCreators.cartItemDecrement(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerCartItemDelete({ payload }: IFetchCartItemDeleteProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      cartApi.fetchDeleteItemToCart,
      payload
    )) as IFetchCartItemDeleteResponse;
    yield put(actionCreators.cartItemDelete(response));
    localStorage.setItem("cart", JSON.stringify(store.getState().cart));
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
  yield all([
    takeLatest(ActionTypes.FETCH_CART_ITEM_CHANGE, workerCartItemChange),
  ]);
  yield all([
    takeLatest(ActionTypes.FETCH_CART_ITEM_INCREMENT, workerCartItemIncrement),
  ]);
  yield all([
    takeLatest(ActionTypes.FETCH_CART_ITEM_DECREMENT, workerCartItemDecrement),
  ]);
  yield all([
    takeLatest(ActionTypes.FETCH_CART_ITEM_DELETE, workerCartItemDelete),
  ]);
}
