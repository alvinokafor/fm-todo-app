import React from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = (props) => {
  return (
    <section className="todo-item-wrapper">
      {props.todoItem.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} />
      ))}

      <TodoInfo />
    </section>
  );
};

export default TodoItemWrapper;
