import { all, fork } from "redux-saga/effects";
// 항상 이펙트 앞에서는 yeild를 붙혀줘야한다. 그리고 yeild는 await과 비슷하다.

import postSaga from "./post";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([fork(postSaga), fork(userSaga)]);
}
