import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import "./TaskApp.css";

const TaskApp = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [editingTask, setEditingTask] = useState(null);

  // ✅ Add or Update Task
  const handleAddOrUpdateTask = (title) => {
    if (!title.trim()) return;

    if (editingTask) {
      // update
      setTasks(
        tasks.map((task) =>
          task.id === editingTask.id ? { ...task, title } : task
        )
      );
      setEditingTask(null);
    } else {
      // add new
      const newTask = {
        id: Date.now(),
        title,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
  };

  // ✅ Toggle Complete
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // ✅ Delete
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // ✅ Edit
  const handleEditTask = (task) => {
    setEditingTask(task);
  };

  // Derived state
  const allComplete = tasks.length > 0 && tasks.every((t) => t.completed);

  return (
    <div className="task-app">
      <h2>Tasks</h2>

      {/* Task Form */}
      <TaskForm
        onSubmit={handleAddOrUpdateTask}
        editingTask={editingTask}
        clearEditing={() => setEditingTask(null)}
      />

      {/* Messages */}
      {tasks.length === 0 && (
        <p className="empty-message">✨ Start by adding your first task!</p>
      )}
      {allComplete && (
        <p className="success-message">🎉 Keep up the good work!</p>
      )}

      {/* Task List */}
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
