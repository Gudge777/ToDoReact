import React from "react";
import classes from './TasksDiv.module.css';
import Task from "./Task/Task";

const TasksDiv = (props) => {
    let tasksArray = props.store.getState();
    let tasksComponents = tasksArray.map (task => <Task key={task.id} task={task} store={props.store}/>)
    return (<div>
        {tasksComponents}
    </div>);
};

export default TasksDiv;