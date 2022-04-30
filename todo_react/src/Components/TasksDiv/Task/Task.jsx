import React from "react";
import classes from './Task.module.css'
import {deleteTask} from "../../../utilites/utilites";

const Task = (props) => {
    let task = props.task;
    let taskCSSClass = '';
    if (task.status) taskCSSClass = classes.completed;
    else taskCSSClass = classes.uncompleted;
    return (
        <div className={classes.task}>
            <div className={classes.taskName + ' ' + taskCSSClass}>{task.name}</div>
            <button className={classes.deleteButton} onClick={()=>deleteTask(props.tasks, task.id)}>Delete</button>
        </div>
    );
}

export default Task;