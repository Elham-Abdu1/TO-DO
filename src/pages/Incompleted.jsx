import React from "react";
import TaskApp from "../components/Task/TaskApp";

const Incompleted = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📝 Incompleted Tasks</h1>
      <TaskApp filter="incompleted" />
    </div>
  );
};

export default Incompleted;
