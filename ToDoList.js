let createTaskDiv = (taskName) =>{
    if (taskName === '') return;
    if (document.getElementById(taskName)){
        alert('Дурак чтоли одинаковые таски добавлять?');
        return;
    }
    let taskDiv = document.createElement('div');
    taskDiv.className = 'taskDivCss';
    let taskSubDiv = document.createElement('div');
    taskSubDiv.textContent = taskName;
    taskSubDiv.className = 'taskSubDiv';
    taskDiv.append(taskSubDiv);
    let deleteButton = document.createElement('div');
    deleteButton.innerHTML = 'Delete';
    deleteButton.className = 'delete buttons';
    deleteButton.id = taskName;
    deleteButton.onclick = () => deleteTask(taskName);
    taskDiv.append(deleteButton);
    document.getElementById('taskDivs').append(taskDiv);
    document.getElementById('inputTask').value = '';
}

let createTask = () =>{
    let taskName = document.getElementById('inputTask').value;
    createTaskDiv(taskName);
}

let deleteTask = (id) =>{
    let taskDiv = document.getElementById(id).parentElement;
    taskDiv.remove();
}

let deleteAllTasks = () =>{
    let taskDiv = document.getElementById('taskDivs');
    taskDiv.innerHTML = '';
}