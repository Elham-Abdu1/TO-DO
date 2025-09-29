import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit, onClose }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "low",
    completed: false,
  });

  useEffect(() => {
    if (taskToEdit) setTask(taskToEdit);
  }, [taskToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
    setTask({ title: "", description: "", dueDate: "", priority: "low", completed: false });
    if (onClose) onClose();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task title"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        required
      />

      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
      />

      <input
        type="date"
        name="dueDate"
        value={task.dueDate}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
      />

      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
      >
        <option value="low">Low Priority</option>
        <option value="medium">Medium Priority</option>
        <option value="high">High Priority</option>
      </select>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
