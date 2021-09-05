import { all, spawn, call } from "redux-saga/effects";
import { saga as accountSaga } from "ducks/account";
import { saga as cartSaga } from "ducks/cart";
import { saga as orderSaga } from "ducks/order";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootSaga() {
  const sagas = [accountSaga, cartSaga, orderSaga];

  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (exception) {
            window.console.error(exception);
          }
        }
      })
    )
  );
}
