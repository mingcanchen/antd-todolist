import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleleItemAction, initListAction, getInitList} from './store/actionCreators';

const Todolist = (props) =>{

  const { inputValue, list, changeInputVaule, handleClick, handleDeleteItem } = props;

  return (
     <div>
        <div>
          <input value={inputValue} onChange={changeInputVaule}/>
          <button onClick={handleClick}>提交</button>
        </div>
        <ul>
          {
            list.map((item, index) => {
              return <li 
                key={index}
                onClick={() => {
                  handleDeleteItem(index);
                }} 
              >
                {item}
              </li>
            })
          }
        </ul>
     </div> 
    )
}

const mapStateToProps = (state) => {
  return {
    list: state.list,
    inputValue: state.inputValue
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputVaule(e) {
      
      const action = getInputChangeAction(e.target.value);

      dispatch(action);
    },

    handleClick() {
      const action = getAddItemAction();

      dispatch(action);
    },

    handleDeleteItem(index) {
      
      const action = getDeleleItemAction(index);

      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
