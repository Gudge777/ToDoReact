import React from "react";
import classes from './InputDiv.module.css';
import {addNewTask} from "../../utilites/utilites";

const InputDiv = (props) =>{
    let inputsRef = React.createRef();
    return (
        <div>
            <input ref={inputsRef}/>
            <button className={classes.addButton} onClick={() => addNewTask(props.tasks, inputsRef.current.value)}>
                Add
            </button>
        </div>
    );
};

export default InputDiv;