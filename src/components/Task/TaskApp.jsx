import React, { useState } from "react";
import TaskForm from "./TaskForm";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]); // State for all tasks

  const handleAddTask = (formData) => {
    const newTask = {
      id: Date.now(), // unique ID
      title: formData.title,
      description: formData.description,
      dueDate: formData.dueDate,
      priority: formData.priority,
      completed: false,
    };

    // Add new task at the beginning
    setTasks([newTask, ...tasks]);

    // Log entire task list for verification
    console.log("Updated Task List:", [newTask, ...tasks]);
  };

  return (
    <div className="container">
      <h1 className="title">
        Task <span className="Task-text">Manager</span>
      </h1>

      {/* Pass handleAddTask as onSubmit prop */}
      <TaskForm onSubmit={handleAddTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="list-item">
            <strong>{task.title}</strong> - {task.description}  
            <br />
            Due: {task.dueDate} | Priority: {task.priority} |{" "}
            {task.completed ? "✅ Completed" : "⏳ Pending"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskApp;
