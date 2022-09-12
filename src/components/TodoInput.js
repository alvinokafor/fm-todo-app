import React from "react";
import "../assets/styles/TodoInput.css";

const TodoInput = () => {
  return (
    <section className="todo-input-container">
      <form>
        <input className="add-todo" placeholder="Add a new Todo"></input>
      </form>
    </section>
  );
};

export default TodoInput;
