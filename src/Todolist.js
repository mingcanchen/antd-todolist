import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputCHangeAction, getAddItemAction, getDeleleItemAction } from './store/actionCreators';
import TodoListUI from './TodoListUI';


class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this); //此方法无法将bind写到构造函数中
    store.subscribe(this.handleStoreChange);
  }


  render() {
    return (
      <TodoListUI 
        inputValue = {this.state.inputValue}
        list = {this.state.list}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        handleItemDelete = {this.handleItemDelete}
      />
    );
  }

  handleInputChange(e) {
   
    const action = getInputCHangeAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChange() {
    // console.log('store change');
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }

  handleItemDelete(index) {
    // alert(index);
    console.log(index);
    const action = getDeleleItemAction(index);
    store.dispatch(action);
  }

}

export default Todolist;
