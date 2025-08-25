import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import "./TaskApp.css"; 


const TaskApp = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (formData) => {
    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
      priority: formData.priority,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    console.log("Updated Task List:", [newTask, ...tasks]);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        Task <span className="highlight">Manager</span>
      </h1>

      <TaskForm onSubmit={handleAddTask} />

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
