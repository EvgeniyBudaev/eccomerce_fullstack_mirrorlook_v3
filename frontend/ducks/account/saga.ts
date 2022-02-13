import {
  all,
  takeLatest,
  takeLeading,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as accountApi from "api/account";
import * as cartApi from "api/cart";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import {
  IFetchSignupResponse,
  IFetchUserResponse,
  IFetchTokenResponse,
  IFetchCartUserSetResponse,
} from "api/types/account";
import {
  ActionTypes,
  ISagaUserSignupProps,
  ISagaUserTokenProps,
} from "ducks/account";
import { store } from "ducks/store";
import * as cartActionCreators from "ducks/cart";
import * as actionCreators from "./actionCreators";

function* fetchCartUserSet(cartId: number, userId: number) {
  const responseCartUser = (yield call(
    cartApi.fetchSetUserToCart,
    cartId,
    userId
  )) as IFetchCartUserSetResponse;
  yield put(cartActionCreators.cartUserSet(responseCartUser.user));
  localStorage.setItem("cart", JSON.stringify(store.getState().cart));
}

function* fetchUserToken({ payload }: ISagaUserTokenProps) {
  const { email, password } = payload;
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const responseToken = (yield call(
      accountApi.fetchToken,
      email,
      password
    )) as IFetchTokenResponse;
    const responseUser = (yield call(
      accountApi.fetchUser,
      responseToken.access
    )) as IFetchUserResponse;
    localStorage.setItem("access", responseToken.access);
    yield put(actionCreators.setUserToken(responseToken));
    yield put(actionCreators.setUser(responseUser));
    localStorage.setItem("account", JSON.stringify(store.getState().account));
    const userId = responseUser.id;
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartId = Number(cart.id);
    yield fetchCartUserSet(cartId, userId);
    yield put(unsetLoading());
  } catch (error) {
    localStorage.removeItem("access");
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* fetchUserSignup({ payload }: ISagaUserSignupProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const responseUserSignup = (yield call(
      accountApi.fetchUserSignup,
      payload
    )) as IFetchSignupResponse;
    console.log("[responseUserSignup]", responseUserSignup);
    yield put(actionCreators.signup(responseUserSignup));
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
  yield all([takeLatest(ActionTypes.LOGIN, fetchUserToken)]);
  yield all([takeLatest(ActionTypes.SIGNUP, fetchUserSignup)]);
}
