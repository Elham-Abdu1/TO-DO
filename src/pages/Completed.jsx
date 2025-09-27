import React from "react";
import TaskApp from "../components/Task/TaskApp";

const Incompleted = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">📝 Incompleted Tasks</h1>
      <TaskApp filter="incompleted" />
    </div>
  );
};

export default Incompleted;
