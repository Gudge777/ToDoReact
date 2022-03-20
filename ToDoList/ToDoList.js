//version with array

const createButton = (buttonName, taskObject, onClick) =>{
    let button = document.createElement('div');
    button.className = buttonName + ' buttons';
    button.innerHTML = buttonName;
    button.onclick = () => onClick(taskObject.name);
    return(button);
}

const showTask = (taskObject) =>{
    let taskDiv = document.createElement('div');
    taskDiv.className = 'taskDivCss';
    taskDiv.id = taskObject.name;
    let divWithTaskName = document.createElement('div');
    divWithTaskName.className = 'taskSubDiv';
    divWithTaskName.innerHTML = taskObject.name;
    let deleteButton = createButton('Delete', taskObject, Delete);
    taskDiv.append(divWithTaskName, deleteButton);

    if (taskObject.completed === false) {
        let completeButton = createButton('Complete', taskObject, Complete);
        taskDiv.append(completeButton);
        let taskDivs = document.getElementById('taskDivs');
        taskDivs.append(taskDiv);
    }else if (taskObject.completed === true){
        taskDiv.style.backgroundColor = 'gray';
        let completedTaskDivs = document.getElementById('completedTaskDivs');
        completedTaskDivs.append(taskDiv);
    }
}

const getInputValue = () =>{
    let inputValue = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = '';
    return(inputValue);
}

const addNewTask = () =>{
    let taskName = getInputValue();
    if ( !taskName ) return;
    let tasksArray = [{}];
    tasksArray = JSON.parse(localStorage.getItem('tasksArray)')) || [];
    let taskObject = {name: taskName, completed: false};
    tasksArray.push(taskObject);
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
    showTask(taskObject);
}

let Delete = (id) =>{
    let taskDiv = document.getElementById(id);
    taskDiv.remove();
    let tasksArray = JSON.parse(localStorage.getItem('tasksArray'));
    for (let i = 0; i < tasksArray.length; i++){
        if (tasksArray[i].name === id) tasksArray.splice(i, 1);
    }
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
}

let Complete = (id) =>{
    let taskDiv = document.getElementById(id);
    taskDiv.remove();
    let tasksArray = JSON.parse(localStorage.getItem('tasksArray'));
    for (let i = 0; i < tasksArray.length; i++){
        if (tasksArray[i].name === id) {
            tasksArray[i].completed = true;
            showTask(tasksArray[i]);
        }
    }
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
}

let deleteAllTasks = () =>{
    let taskDiv = document.getElementById('taskDivs');
    taskDiv.innerHTML = '';
    let completedTaskDivs = document.getElementById('completedTaskDivs');
    completedTaskDivs.innerHTML = '';
    localStorage.clear();
}

const showAllTasks = () =>{
    let tasksArray = JSON.parse(localStorage.getItem('tasksArray')) || [];
    for (let i = 0; i < tasksArray.length; i++){
        showTask(tasksArray[i]);
    }
}

showAllTasks();