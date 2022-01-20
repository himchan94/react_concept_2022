import { all } from "redux-saga/effects";
import { usersSaga } from "../actions";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
