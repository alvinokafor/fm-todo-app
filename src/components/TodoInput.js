import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "../assets/styles/TodoInput.css";

const TodoInput = (props) => {
  const [newTodo, setNewTodo] = useState('')

  const newTodoHandler = (e) => {
    setNewTodo(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const newTodoItem = {
      id: uuidv4(),
      title: newTodo,
      status: false
    }

    props.onAddTodo(newTodoItem)

    e.target.elements.todoTitle.value = "";
    // console.log(newTodoItem)
  }



  return (
    <section className="todo-input-container">
      <form onSubmit={submitHandler}>
        <input
          onChange={newTodoHandler}
          name='todoTitle'
          className="add-todo"
          placeholder="Add a new Todo"
        ></input>
      </form>
    </section>
  );
};

export default TodoInput;
