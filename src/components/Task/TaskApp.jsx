import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const TaskApp = ({ filter = "all" }) => {
  const [tasks, setTasks] = useState([]);

  // 👉 Add task
  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      ...taskData,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // 👉 Toggle completion
  const handleToggleComplete = (taskId) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  // 👉 Delete task
  const handleDeleteTask = (taskId) => {
    const updated = tasks.filter((task) => task.id !== taskId);
    setTasks(updated);
  };

  // 👉 Edit task
  const handleEditTask = (taskId, updatedData) => {
    const updated = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedData } : task
    );
    setTasks(updated);
  };

  // 👉 Filtering based on page
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incompleted") return !task.completed;
    return true; // default: show all
  });

  return (
    <div className="p-6">
      {filter === "all" && (
        <TaskForm onSubmit={handleAddTask} />
      )}

      <div className="grid gap-4 mt-6">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">
            {filter === "completed"
              ? "No completed tasks yet!"
              : filter === "incompleted"
              ? "All tasks are completed 🎉"
              : "Start by adding your first task!"}
          </p>
        ) : (
          filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TaskApp;
