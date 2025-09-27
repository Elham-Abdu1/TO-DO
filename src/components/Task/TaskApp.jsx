import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleAddTask = (taskData) => {
    if (taskToEdit) {
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskToEdit.id ? { ...task, ...taskData } : task
        )
      );
      setTaskToEdit(null);
    } else {
      const newTask = {
        id: Date.now(),
        ...taskData,
        completed: false,
      };
      setTasks([newTask, ...tasks]);
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6">
      <TaskForm onSubmit={handleAddTask} taskToEdit={taskToEdit} />

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 mt-6 italic">
          🌱 Start by adding your first task!
        </p>
      ) : (
        <div className="mt-6 space-y-4">
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
      )}
    </div>
  );
};

export default TaskApp;
