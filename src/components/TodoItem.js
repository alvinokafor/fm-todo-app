import React, { useState } from "react";
import styles from "../assets/styles/TodoItem.module.css";

const TodoItem = (props) => {
  const [isChecked, setChecked] = useState(false);

  const checkHandler = (e) => {
    // setChecked(!isChecked);
    setChecked(e.target.checked)
  };

  if (isChecked) {
    console.log("Completed");
  } else {
    console.log("Active");
  }

  return (
    <div className={styles["todo-items"]}>
      <div className={styles["todo-checkbox"]}>
        <input
          onChange={checkHandler}
          id="checkbox"
          type="checkbox"
          // name={styles["todoCheck"]}
          className={styles["todo-checkbox"]}
        />
      </div>
      <label
        htmlFor="checkbox"
        className={`${styles["todo-title"]} ${
          isChecked && styles["todo-completed"]
        }`}
      >
        {props.title}
      </label>
    </div>
  );
};

export default TodoItem;
