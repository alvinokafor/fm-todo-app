import React, {useState} from "react";
import TodoItem from "./TodoItem";
import TodoInfo from "./TodoInfo";
import "../assets/styles/TodoItemWrapper.css";

const TodoItemWrapper = (props) => {

  // const [todos, setTodos] = useState(props.todoItem)

  // const filterTodos = (filter) => {
  //   if (filter === null) {
  //     setTodos(props.todoItem)
  //   }   else {
  //     setTodos(prev => {
  //       return (
  //         props.todoItem.filter((todo) => todo.isComplete === filter)
  //       )
  //     })
  //   }
  // }

  console.log(props.todoItem)
  return (
    <section className="todo-item-wrapper">
      {props.todoItem.map((todo) => (
        <TodoItem 
        todoData={todo} 
        key={todo.id}
        editHandler={props.editHandler} 
        // title={todo.title} 
        />
      ))}

      <TodoInfo 
      // filteredTodos={filterTodos} 
      />
    </section>
  );
};

export default TodoItemWrapper;
