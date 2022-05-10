import './App.css';
import React from 'react';
import InputDiv from "./Components/InputDiv/InputDiv";
import TasksDiv from './Components/TasksDiv/TasksDiv';

function App(props) {
  return (
    <div className="allPageDiv">
        <header>
          <h1>My ToDo List</h1>
        </header>
        <InputDiv store={props.store}/>
        <TasksDiv store={props.store}/>
    </div>
  );
}

export default App;
