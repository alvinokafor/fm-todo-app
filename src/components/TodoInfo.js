import React from "react";
import "../assets/styles/TodoInfo.css";

const TodoInfo = (props) => {



  return (
    <div className="todo-info-container">
      <p className="items-left">5 items left</p>
      <div className="status">
        <span 
        // onClick={() => props.filteredTodos(null)}
        >All</span>
        <span 
        // onClick={() => props.filteredTodos(true)}
        >Active</span>
        <span 
        // onClick={() => props.filteredTodos(false)}
        >Completed</span>
      </div>
      <p className="clear-items">Clear Completed</p>
    </div>
  );
};

export default TodoInfo;
