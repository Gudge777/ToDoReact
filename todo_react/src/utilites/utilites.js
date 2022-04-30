import React from "react";
import {renderEntireTree} from "../index";
import { v4 as uuidv4 } from 'uuid';

export const addNewTask = (tasksArray, taskName) =>{
    let id = uuidv4();
    let newTask = {
        id: id,
        name:taskName,
        status:0
    };
    tasksArray.push(newTask);
    renderEntireTree();
};

export const deleteTask = (tasksArray, id) =>{
    for (let i = 0; i < tasksArray.length; i++){
        if (tasksArray[i].id === id) tasksArray.splice(i,1);
    }
    renderEntireTree();
}
