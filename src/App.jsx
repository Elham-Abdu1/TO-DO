import React from "react";
import "./App.css";
import TaskApp from "./components/Task/TaskApp";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">My Task Manager</h1>
      <TaskApp />
    </div>
  );
};

export default App;
