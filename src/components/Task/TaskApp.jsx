import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import "./TaskApp.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null); // holds the task being edited

  const handleAddTask = (formData) => {
    if (taskToEdit) {
      // Editing existing task
      const updatedTasks = tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, ...formData } : task
      );
      setTasks(updatedTasks);
      setTaskToEdit(null); // reset after editing
    } else {
      // Adding new task
      const newTask = {
        id: Date.now(),
        ...formData,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
    console.log("Updated Task List:", tasks);
  };

  const handleToggleComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const handleEditTask = (taskId) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setTaskToEdit(task);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        Task <span className="highlight">Manager</span>
      </h1>

      {/* TaskForm can be used for both Add & Edit */}
      <TaskForm onSubmit={handleAddTask} initialTask={taskToEdit} />

      <div className="task-list">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskApp;
