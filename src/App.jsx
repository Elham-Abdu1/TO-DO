import React from "react";
import TaskApp from "./components/Task/TaskApp";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-6">
        📖 My Islamic Task Manager
      </h1>
      <TaskApp />
    </div>
    );
};

export default App;
