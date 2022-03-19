//version with array

const createButton = (buttonName, taskObject) =>{
    let button = document.createElement('div');
    button.className = buttonName + ' buttons';
    console.log(button.className);
    button.innerHTML = buttonName;
    //button.onclick = () => buttonName(taskObject.name);
    return(button);
}

const showTask = (taskObject) =>{
    let taskDiv = document.createElement('div');
    taskDiv.className = 'taskDivCss';
    taskDiv.id = taskObject.name;
    let divWithTaskName = document.createElement('div');
    divWithTaskName.className = 'taskSubDiv';
    divWithTaskName.innerHTML = taskObject.name;
    let deleteButton = createButton('Delete', taskObject);
    taskDiv.append(divWithTaskName, deleteButton);

    if (!taskObject.completed) {
        let completeButton = createButton('Complete', taskObject);
        taskDiv.append(completeButton);
        document.getElementById('taskDivs').append(taskDiv);
    }else{
        taskDiv.style.backgroundColor = 'gray';
        document.getElementById('completedTaskDivs').append(taskDiv);
    }
}

const getInputValue = () =>{
    let inputValue = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = '';
    return(inputValue);
}

const addNewTask = () =>{
    let taskName = getInputValue();
    if (!taskName) return;
    let tasksArray = JSON.parse(localStorage.getItem('tasksArray)')) || [{}];
    let taskObject = {name: taskName, completed: false};
    tasksArray.push(taskObject);
    localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
    showTask(taskObject);
}

/*let showNewTask = (taskObj) =>{
    let task = JSON.parse(taskObj);
    let div = document.createElement('div');
    div.className = 'taskDivCss';
    div.id = task.name;
    let taskSubDiv = document.createElement('div'); //создаем див с текстом таски
    taskSubDiv.className = 'taskSubDiv';
    taskSubDiv.innerHTML = task.name;
    div.append(taskSubDiv);
    let complete = document.createElement('div'); //создаем кнопку complete для таски
    complete.className = 'buttons complete';
    complete.innerHTML = 'Complete';
    complete.onclick = () => completeTask(task.name);
    div.append(complete);
    let deleteDiv = document.createElement('div'); //создаем кнопку delete для таски
    deleteDiv.className = 'buttons delete';
    deleteDiv.innerHTML = 'Delete';
    deleteDiv.onclick = () => deleteTask(task.name);
    div.append(deleteDiv);
    let taskDivs = document.getElementById('taskDivs');
    taskDivs.append(div);
    if (task.completed) div.style.backgroundColor = 'gray';
}*/

let Delete = (id) =>{
    let taskDiv = document.getElementById(id);
    taskDiv.remove();
    localStorage.removeItem(id);
}

let Complete = (id) =>{
    let taskDiv = document.getElementById(id);
    taskDiv.remove();
    let task = JSON.parse(localStorage.getItem(id));
    localStorage.removeItem(id);
    task.completed = true;
    localStorage.setItem(id, JSON.stringify(task));
    showNewTask(localStorage.getItem(id));
}

let deleteAllTasks = () =>{
    let taskDiv = document.getElementById('taskDivs');
    taskDiv.innerHTML = '';
    let completedTaskDivs = document.getElementById('completedTaskDivs');
    completedTaskDivs.innerHTML = '';
    localStorage.clear();
}