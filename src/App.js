import React from "react";
import Header from "./components/Header";
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import './index.css'

const App = () => {
  return (
    <main className="main-container">
      <Header />

      <TodoWrapper>
        <TodoHeader />
        <TodoInput />
        <TodoItem />
      </TodoWrapper>
      
      
    </main>
  );
};

export default App;
