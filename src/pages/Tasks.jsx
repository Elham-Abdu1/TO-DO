import React from "react";
import TaskApp from "../components/Task/TaskApp";

const Tasks = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">🕌 Task Manager</h1>
      <TaskApp filter="all" />
    </div>
  );
};

export default Tasks;
