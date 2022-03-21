const getInputValue = () =>{
    let inputValue = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = '';
    return(inputValue);
}

const reRender = () => {
    document.getElementById('taskDivs').innerHTML = '';
    document.getElementById('completedTaskDivs').innerHTML = '';
    render();
}

const addNewTask = () =>{
    let newTaskName = getInputValue();
    if (!newTaskName) return;
    let newTaskObj = {
        name: newTaskName,
        status: 0,
    }
    tasksArray.push(newTaskObj);
    localStorage.setItem('tasksString', JSON.stringify(tasksArray));
    reRender();
}

const DeleteOrComplete = (id, buttonName) =>{
    let index = tasksArray.findIndex((item) => item.name === id);
    console.log(index, buttonName);
    if (buttonName === 'Delete') tasksArray.splice(index, 1);
    else if (buttonName === 'Complete') tasksArray[index].status = 1;
    localStorage.setItem('tasksString', JSON.stringify(tasksArray));
    reRender();
}

let deleteAllTasks = () =>{
    let taskDiv = document.getElementById('taskDivs');
    taskDiv.innerHTML = '';
    let completedTaskDivs = document.getElementById('completedTaskDivs');
    completedTaskDivs.innerHTML = '';
    localStorage.clear();
}

const createButton = (buttonName, taskName, onClick) =>{
    let button = document.createElement('div');
    button.className = buttonName + ' buttons';
    button.innerHTML = buttonName;
    button.onclick = () => onClick(taskName, buttonName);
    return(button);
}

const render = () =>{
    tasksArray.map((item) => {
        let taskDiv = document.createElement('div');
        taskDiv.className = 'taskDivCss';
        taskDiv.id = item.name;
        let divWithTaskName = document.createElement('div');
        divWithTaskName.className = 'taskSubDiv';
        divWithTaskName.innerHTML = item.name;
        let deleteButton = createButton('Delete', item.name, DeleteOrComplete);
        taskDiv.append(divWithTaskName, deleteButton);

        if (item.status === 1){
            taskDiv.style.backgroundColor = 'gray';
            document.getElementById('completedTaskDivs').append(taskDiv);
        } else {
            let completeButton = createButton('Complete', item.name, DeleteOrComplete);
            taskDiv.append(completeButton);
            document.getElementById('taskDivs').append(taskDiv);
        }
    })
}

let tasksArray = JSON.parse(localStorage.getItem('tasksString')) || [];
render();
