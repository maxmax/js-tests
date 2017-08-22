import takeLatest from "redux-saga";
import { all, call } from "redux-saga/effects";
import { loadWords, watchLoadWords } from "./words";
import { helloSaga, watchIncrementAsync } from "./counter";

export function* sagas() {
  yield all( [
    call(loadWords),
    call(watchLoadWords),
    call(helloSaga),
    call(watchIncrementAsync)
  ]);
}
