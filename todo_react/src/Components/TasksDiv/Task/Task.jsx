import React from "react";
import classes from './Task.module.css'

const Task = (props) => {
    let task = props.task;
    let taskCSSClass = '';
    if (task.status) taskCSSClass = classes.completed;
    else taskCSSClass = classes.uncompleted;
    const handleCompleteClick = () =>{
        props.store.dispatch({type: 'completeTask', id: task.id});
        props.store.dispatch({type: 'sortTasks'});
    }
    return (
        <div className={classes.task}>
            <div className={classes.taskName + ' ' + taskCSSClass}>{task.name}</div>
            <button className={classes.completeButton}
                    onClick={handleCompleteClick}>
                Complete
            </button>

            <button className={classes.deleteButton}
                    onClick={() => props.store.dispatch({type: 'deleteTask', id: task.id})}>
                Delete
            </button>
        </div>
    );
}

export default Task;