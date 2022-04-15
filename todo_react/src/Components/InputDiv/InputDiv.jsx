import React from "react";
import classes from './InputDiv.module.css';
import addNewTask from "./InputDiv.js";

const InputDiv = () =>{
    return (
        <div>
            <input id={classes.input}/>
            <button className={classes.addButton} onClick={addNewTask()}>Add</button>
        </div>
    );
}

export default InputDiv;