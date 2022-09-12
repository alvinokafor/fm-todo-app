import React from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = (props) => {
  return (
    <section className="todo-item-wrapper">
     <TodoItem 
      title={props.todoItem[0].title}
     />
    

     <TodoInfo />
    </section>
  );
};

export default TodoItemWrapper;
