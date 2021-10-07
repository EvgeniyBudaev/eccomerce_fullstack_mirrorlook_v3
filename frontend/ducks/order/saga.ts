import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as orderApi from "api/order";
import { IFetchOrderResponse } from "api/types/order";
import { setLoading, unsetLoading } from "ducks/loading";
import { setUnhandledError } from "ducks/unhandledError";
import * as actionCreators from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import {
  IFetchOrderProps,
  IFetchOrderRecipientSaveProps,
  IFetchOrderShippingAddressSaveProps,
} from "./types";

function* workerShippingSave({ payload }: IFetchOrderShippingAddressSaveProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    yield put(actionCreators.orderShippingSave(payload));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerRecipientSave({ payload }: IFetchOrderRecipientSaveProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    yield put(actionCreators.orderRecipientSave(payload));
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerOrderCreateSave({ payload }: IFetchOrderProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    const response = (yield call(
      orderApi.fetchOrderCreate,
      payload
    )) as IFetchOrderResponse;
    console.log("response", response);
    yield put(actionCreators.orderCreate(response));
    // localStorage.setItem("order", JSON.stringify(store.getState().order));
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
  yield all([
    takeLatest(
      ActionTypes.FETCH_ORDER_SHIPPING_ADDRESS_SAVE,
      workerShippingSave
    ),
  ]);
  yield all([
    takeLatest(ActionTypes.FETCH_ORDER_RECIPIENT_SAVE, workerRecipientSave),
  ]);
  yield all([
    takeLatest(ActionTypes.FETCH_ORDER_CREATE, workerOrderCreateSave),
  ]);
}
