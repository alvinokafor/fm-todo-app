import React from "react";
import "../assets/styles/TodoItem.css";

const TodoItem = (props) => {
  const checkHandler = (e) => {
    console.log(e.target.checked);
  };

  return (
    <div className="todo-items">
      <div className="todo-checkbox">
        <input
          onChange={checkHandler}
          id="checkbox"
          type="checkbox"
          name="todoCheck"
          className="todoCheck"
        />
      </div>
      <label htmlFor="checkbox" className="todo-title">
        {props.title}
      </label>
    </div>
  );
};

export default TodoItem;
