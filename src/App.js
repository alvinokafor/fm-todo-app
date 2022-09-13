import React, { useState } from "react";
import Header from "./components/Header";
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from "uuid";
import TodoItemWrapper from "./components/TodoItemWrapper";
import "./index.css";

const DUMMY_DATA = [
  {
    id: uuidv4(),
    title: "go to the gym",
    isComplete: false,
  },

  {
    id: uuidv4(),
    title: "eat some food",
    isComplete: false,
  },
];

const App = () => {
  const [todoDB, updateTodoList] = useState(DUMMY_DATA);

  const addTodoHandler = (newTodoItem) => {
    updateTodoList((prev) => {
      return [newTodoItem, ...prev];
    });
  };

  const editHandler = (todoItem) => {
    updateTodoList((prev) => {
      return prev.map((todo) => {
        if (todoItem.id !== todo.id) {
          return todo;
        }
        return {
          ...todoItem,
          isComplete: !todoItem.isComplete,
        };
      });
    });
  };

  return (
    <main className="main-container">
      <Header />

      <TodoWrapper>
        <TodoHeader />
        <TodoInput onAddTodo={addTodoHandler} />
        <TodoItemWrapper editHandler={editHandler} todoItem={todoDB} />
      </TodoWrapper>
    </main>
  );
};

export default App;
