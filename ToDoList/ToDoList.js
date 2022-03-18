const createButton = (buttonName, task) =>{
    let button = document.createElement('div');
    button.className = 'buttons' + buttonName;
    button.innerHTML = buttonName;
    button.onclick = () => buttonName(task.name);
}

let showNewTask = (taskObj) =>{
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
}

let deleteTask = (id) =>{
    let taskDiv = document.getElementById(id);
    taskDiv.remove();
    localStorage.removeItem(id);
}

let completeTask = (id) =>{
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
    localStorage.clear();
}