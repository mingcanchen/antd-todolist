import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store';
import { getInputCHangeAction, getAddItemAction, getDeleleItemAction, initListAction, getInitList} from './store/actionCreators';
import TodoListUI from './TodoListUI';
import axios from 'axios';



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

  componentDidMount() {
    const action = getInitList();
    store.dispatch(action);
    // console.log(action);
   //  axios.get("https://www.easy-mock.com/mock/5a8e7ae4f6208b69f2c27ee2/test1/api/item")
   //  .then((res) => {
   //    const data = res.data.list;
   //    const action = initListAction(data);
   //    store.dispatch(action);
   // })

    // const action = getTodoList();
    // store.dispatch(action);
    // console.log(action);
    // axios.get("https://www.easy-mock.com/mock/5a8e7ae4f6208b69f2c27ee2/test1/api/item").then((res) => {
    //   const data = res.data.list;
    //   // console.log(data);
    //   const action = initListAction(data);
    //   store.dispatch(action);
    // })
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
    // console.log(index);
    const action = getDeleleItemAction(index);
    store.dispatch(action);
  }

}

export default Todolist;
