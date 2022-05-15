import React, {useState} from "react";
import classes from './InputDiv.module.css';

const InputDiv = (props) =>{
    const store = props.store;
    const [enteringTask, setEnteringTask] = useState('');
    const handleAddClick = () => {
        store.dispatch({type: 'addTask', taskName:enteringTask});
        setEnteringTask('');
        store.dispatch({type: 'sortTasks'})
    }

    return (
        <div>
            <input placeholder='Input task'
            type = {'text'}
            value={enteringTask}
            onChange={(e) => setEnteringTask(e.target.value) }/>
            <button className={classes.addButton} onClick={handleAddClick}>
                Add
            </button>
        </div>
    );
};

export default InputDiv;