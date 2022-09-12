import React from "react";
import "../assets/styles/TodoItem.css";

const TodoItem = () => {
  return (
    <section className="todo-item-wrapper">
      <div className="todo-items">
        <div className="todo-checkbox">
          <label for="checkbox"></label>
          <input id="checkbox" type="checkbox" name="todoCheck" />
        </div>
        <div className="todo-title">
          <p>Default Todo Item</p>
        </div>
      </div>
    </section>
  );
};

export default TodoItem;
