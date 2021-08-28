import { all, spawn, call } from "redux-saga/effects";
import { saga as accountSaga } from "ducks/account";
import { saga as cartSaga } from "ducks/cart";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootSaga() {
  const sagas = [accountSaga, cartSaga];

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
