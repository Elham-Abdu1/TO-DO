import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setDueDate(taskToEdit.dueDate || "");
      setPriority(taskToEdit.priority || "Low");
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onSubmit({ title, description, dueDate, priority });

    if (!taskToEdit) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 border-b border-gray-200 pb-4"
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        required
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className="w-full p-2 border rounded-md focus:ring-2 focus:ring-green-400"
      />

      <div className="flex flex-col sm:flex-row sm:space-x-4">
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="flex-1 p-2 border rounded-md focus:ring-2 focus:ring-green-400"
        >
          <option value="Low">🟢 Low</option>
          <option value="Medium">🟡 Medium</option>
          <option value="High">🔴 High</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md"
      >
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
