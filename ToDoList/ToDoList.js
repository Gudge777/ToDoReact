let createNewTask = (taskName) =>{
    if (localStorage.getItem(taskName) || taskName === '') return;
    let task = {};
    task.name = taskName;
    task.completed = false;
    localStorage.setItem(taskName, JSON.stringify(task));
    showNewTask(localStorage.getItem(taskName));
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

let createTask = () =>{
    let taskName = document.getElementById('inputTask').value;
    document.getElementById('inputTask').value = '';
    createNewTask(taskName);
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

let showTasks = () =>{
    for (let i = 0; i < localStorage.length; i++){
        let task = localStorage.key(i);
        showNewTask(localStorage.getItem(task));
    }
    for (let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let task =JSON.parse(localStorage.getItem(key));
        if (task.completed) completeTask(key);
    }
}

showTasks();