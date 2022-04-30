import React from "react";
import ReactDOM from 'react-dom';
import {renderEntireTree} from "../index";

export const addNewTask = (tasksArray, taskName) =>{
    let newTask = {
        name:taskName,
        status:0
    };
    tasksArray.push(newTask);
    renderEntireTree();
};

export const deleteNewTask = (tasksArray, id) =>{

}
