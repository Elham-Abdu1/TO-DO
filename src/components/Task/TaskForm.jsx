import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({ title, date });
    setTitle("");
    setDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 sm:items-center"
    >
      <input
        type="text"
        placeholder="Enter task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
      />
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
