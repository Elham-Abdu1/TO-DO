import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import "./TaskApp.css";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Add task
  const handleAddTask = (task) => {
    if (taskToEdit) {
      handleEditTask(taskToEdit.id, task);
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
  };

  // Toggle complete
  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Edit task
  const handleEditTask = (taskId, updatedTaskData) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTaskData } : task
      )
    );
  };

  // Derived state
  const allCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

  return (
    <div className="task-app">
      <h1> Task Manager ✅</h1>

      <TaskForm onAddTask={handleAddTask} taskToEdit={taskToEdit} />

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="empty-message">✨ Start by adding your first task! ✨</p>
        ) : allCompleted ? (
          <p className="all-done-message">🎉 Keep up the good work! All tasks completed! 🎉</p>
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDeleteTask={handleDeleteTask}
              onEditTask={(task) => setTaskToEdit(task)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskApp;
