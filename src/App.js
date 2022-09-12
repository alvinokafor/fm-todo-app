import React from "react";
import Header from "./components/Header";
import TodoHeader from "./components/TodoHeader";
import TodoWrapper from "./components/TodoWrapper";
import TodoInput from "./components/TodoInput";
import { v4 as uuidv4 } from 'uuid';
import TodoItemWrapper from "./components/TodoItemWrapper";
import './index.css'

const App = () => {

  const todoDB = [
    {
      id: uuidv4(),
      title: 'go to the gym',
      status: false
    },

    {
      id: uuidv4(),
      title: 'eat some food',
      status: false
    }
  ]

  const addTodoHandler = (newTodoItem) => {
    todoDB.push(newTodoItem)
    console.log(todoDB)
  }

  return (
    <main className="main-container">
      <Header />

      <TodoWrapper>
        <TodoHeader />
        <TodoInput 
          onAddTodo={addTodoHandler}
        />
        <TodoItemWrapper 
          todoItem={todoDB}
        />
      </TodoWrapper>
      
      
    </main>
  );
};

export default App;
