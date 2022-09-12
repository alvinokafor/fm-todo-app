import React from "react";
import '../assets/styles/TodoWrapper.css'

const TodoWrapper = (props) => {

    const classes = 'todo-wrapper'

    return (
        <section className={classes}>
            {props.children}
        </section>
    )
}

export default TodoWrapper