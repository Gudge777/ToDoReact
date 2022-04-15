import './App.css';
import React from 'react';
import CompletedTasks from './Components/CompletedTasks/CompletedTasks'
import UncompletedTasks from "./Components/UncompletedTasks/UncompletedTasks";
import InputDiv from "./Components/InputDiv/InputDiv";

function App() {
  return (
    <div className="allPageDiv">
        <header>
          <h1>My ToDo List</h1>
        </header>
        <InputDiv/>
        <UncompletedTasks />
        <CompletedTasks />
    </div>
  );
}

export default App;
