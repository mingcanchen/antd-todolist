import { takeEvery, put } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators'

function* getInitList() {
	const res = yield axios.get("https://www.easy-mock.com/mock/5a8e7ae4f6208b69f2c27ee2/test1/api/item");
	const action = initListAction(res.data.list);
	yield put(action);
	// console.log("ac");
}
// generator 函数
function* todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;