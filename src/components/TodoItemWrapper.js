import React from "react";
import TodoItem from "./TodoItem";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = () => {
  return (
    <section className="todo-item-wrapper">
     <TodoItem />
    </section>
  );
};

export default TodoItemWrapper;
