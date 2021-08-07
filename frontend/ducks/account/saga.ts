import { all, takeLatest, takeLeading, call, put } from "redux-saga/effects";
import * as accountApi from "api/account";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import { IFetchUserResponse, ITokenResponse } from "api/types/account";
import { IFetchUserTokenProps, LOGIN } from "ducks/account";
import * as actionCreators from "./actionCreators";

function* fetchUserToken({ payload }: IFetchUserTokenProps) {
  const { email, password } = payload;
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const responseToken = (yield call(
      accountApi.fetchToken,
      email,
      password
    )) as ITokenResponse;
    const responseUser = (yield call(
      accountApi.fetchUser,
      responseToken.access
    )) as IFetchUserResponse;
    localStorage.setItem("access", responseToken.access);
    yield put(actionCreators.setUserToken(responseToken));
    yield put(actionCreators.setUser(responseUser));
    yield put(unsetLoading());
  } catch (error) {
    localStorage.removeItem("access");
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* watch() {
  yield all([takeLatest(LOGIN, fetchUserToken)]);
}
