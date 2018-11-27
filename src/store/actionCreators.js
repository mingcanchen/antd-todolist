import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes';
// import axios from 'axios';

export const getInputCHangeAction = (value) =>({
	type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDeleleItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
});

// export const getTodoList = () => {
// 	return (dispatch) => {
// 	  axios.get("https://www.easy-mock.com/mock/5a8e7ae4f6208b69f2c27ee2/test1/api/item")
// 	  .then((res) => {
//       const data = res.data.list;
//       const action = initListAction(data);
//       dispatch(action);
// 	 })
//    }
// };

export const getInitList = () =>({
	type: GET_INIT_LIST,
})