import React from "react";
import Header from "./components/Header";
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
import TodoItemWrapper from "./components/TodoItemWrapper";
import './index.css'

const App = () => {
  return (
    <main className="main-container">
      <Header />

      <TodoWrapper>
        <TodoHeader />
        <TodoInput />
        <TodoItemWrapper />
      </TodoWrapper>
      
      
    </main>
  );
};

export default App;
