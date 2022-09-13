import React from "react";
import styles from "../assets/styles/TodoItem.module.css";

const TodoItem = (props) => {
  // const [isChecked, setChecked] = useState();

  // const [newStatus, updateStatus] = useState(props.todoData)

  const checkHandler = (e) => {
    // setChecked(!isChecked);
  

    props.editHandler(props.todoData)
  };

  if (props.todoData.isComplete) {
    console.log("Completed");
  } else {
    console.log("Active");
  }

  return (
    <div className={styles["todo-items"]}>
      <div className={styles["todo-checkbox"]}>
        <input
          onChange={checkHandler}
          checked={props.todoData.isComplete}
          id="checkbox"
          type="checkbox"
          // name={styles["todoCheck"]}
          className={styles["todo-checkbox"]}
        />
      </div>
      <label
        htmlFor="checkbox"
        className={`${styles["todo-title"]} 
        ${props.todoData.isComplete && styles["todo-completed"]}
        `}
      >
        {props.todoData.title}
      </label>
    </div>
  );
};

export default TodoItem;
