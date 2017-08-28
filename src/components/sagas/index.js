import takeLatest from "redux-saga";
import { all, call } from "redux-saga/effects";
import { loadInbox, watchLoadInbox } from "./inbox";
import { loadWords, watchLoadWords } from "./words";
import { helloSaga, watchIncrementAsync } from "./counter";
import { getWeatherSaga } from "./weather";

export function* sagas() {
  yield all( [
    call(loadInbox),
    call(watchLoadInbox),
    call(loadWords),
    call(watchLoadWords),
    call(helloSaga),
    call(watchIncrementAsync),
    call(getWeatherSaga)
  ]);
}
