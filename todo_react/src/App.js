import './App.css';
import React from 'react';
import InputDiv from "./Components/InputDiv/InputDiv";
import TasksDiv from './Components/TasksDiv/TasksDiv';
function App(state) {
  return (
    <div className="allPageDiv">
        <header>
          <h1>My ToDo List</h1>
        </header>
        <InputDiv tasks={state.state.tasks}/>
        <TasksDiv state={state.state}/>
    </div>
  );
}

export default App;
