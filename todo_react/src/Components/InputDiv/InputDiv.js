import classes from './InputDiv.module.css'

/*const getTaskName = () => {
    let inputDiv = document.getElementById(classes.index);
    let inputValue = inputDiv.innerText;
    return( inputValue );
}*/

const addNewTask = () => {
    let inputDiv = document.getElementById(classes.index);
    let inputValue = inputDiv.innerText;
    //let inputValue = getTaskName();
    if (inputValue === '') return;
}

export default addNewTask;