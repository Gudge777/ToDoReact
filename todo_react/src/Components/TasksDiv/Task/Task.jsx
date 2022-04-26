import React from "react";
import classes from './Task.module.css'

const Task = (props) => {
    let task = props.task;
    let taskCSSClass = '';
    if (task.status) taskCSSClass = classes.completed;
    else taskCSSClass = classes.uncompleted;
    return (
        <div className={classes.task}>
            <div className={classes.taskName + ' ' + taskCSSClass}>{task.name}</div>
            <button className={classes.deleteButton}>Delete</button>
        </div>
    );
}

export default Task;