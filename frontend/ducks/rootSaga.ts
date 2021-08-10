import { all, spawn, call } from "redux-saga/effects";
import { saga as accountSaga } from "ducks/account";
import { saga as basketSaga } from "ducks/basket";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootSaga() {
  const sagas = [accountSaga, basketSaga];

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