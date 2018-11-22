import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes';

export const getInputCHangeAction = (value) =>({
	type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemAction = () => ({
	type: ADD_TODO_ITEM
})

export const getDeleleItemAction = (index) => ({
	type: DELETE_TODO_ITEM,
	index
})