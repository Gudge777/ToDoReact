import React from "react";
import classes from './TasksDiv.module.css';
import Task from "./Task/Task";

const TasksDiv = (props) => {
    let tasksArray = props.state.tasks;
    let tasksComponents = tasksArray.map (task => <Task task={task}/>)
    return (<div>
        {tasksComponents}
    </div>);
};

export default TasksDiv;