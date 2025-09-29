import React, { useState } from "react";

const Tasks = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div className="p-6 md:p-12">
      <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
        📋 Manage Your Tasks
      </h1>

      {/* Form */}
      <form
        onSubmit={addTask}
        className="flex flex-col md:flex-row gap-4 items-center justify-center mb-8"
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
          className="w-full md:w-2/3 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
        >
          Add Task
        </button>
      </form>

      {/* Task List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tasks.map((t) => (
          <div
            key={t.id}
            onClick={() => toggleTask(t.id)}
            className={`cursor-pointer border rounded-lg p-4 shadow hover:shadow-md transition ${
              t.completed
                ? "bg-green-100 line-through text-gray-500"
                : "bg-white"
            }`}
          >
            {t.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
