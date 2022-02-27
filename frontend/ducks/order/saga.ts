import {
  all,
  takeLatest,
  call,
  put,
  AllEffect,
  ForkEffect,
} from "redux-saga/effects";
import * as orderApi from "api/order";
import {
  IFetchOrderResponse,
  IFetchSendingConfirmOrderResponse,
} from "api/types/order";
import { setLoading, unsetLoading } from "ducks/loading";
import { store } from "ducks/store";
import { setUnhandledError } from "ducks/unhandledError";
import * as actionCreators from "./actionCreators";
import { ActionTypes } from "./actionTypes";
import { cartClear } from "ducks/cart/actionCreators";
import {
  IFetchOrderProps,
  IFetchOrderRecipientSaveProps,
  IFetchOrderSendToEmailProps,
  IFetchOrderShippingAddressSaveProps,
} from "./types";

function* workerShippingSave({ payload }: IFetchOrderShippingAddressSaveProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    yield put(actionCreators.orderShippingSave(payload));
    localStorage.setItem(
      "shipping_address",
      JSON.stringify(store.getState().order.shipping_address)
    );
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
    localStorage.setItem(
      "order_user",
      JSON.stringify(store.getState().order.order_user)
    );
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
    yield put(actionCreators.orderCreate(response));
    localStorage.setItem("order", JSON.stringify(store.getState().order));
    localStorage.setItem(
      "shipping_address",
      JSON.stringify(store.getState().order.shipping_address)
    );
    yield put(unsetLoading());
  } catch (error) {
    yield put(setUnhandledError(error));
    yield put(unsetLoading());
  }
}

function* workerOrderSendToEmail({ payload }: IFetchOrderSendToEmailProps) {
  yield put(setUnhandledError(null));
  yield put(setLoading());
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const responseSendingConfirmOrder = (yield call(
      orderApi.fetchSendingConfirmOrder,
      payload
    )) as IFetchSendingConfirmOrderResponse;
    if (responseSendingConfirmOrder) {
      yield put(cartClear());
      localStorage.setItem("cart", JSON.stringify(store.getState().cart));
      yield put(actionCreators.orderEmailSended());
    }
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
  yield all([
    takeLatest(ActionTypes.FETCH_ORDER_SEND_TO_EMAIL, workerOrderSendToEmail),
  ]);
}
