import React from "react";

const TaskCard = ({ task, onToggleComplete, onEdit, onDelete }) => {
  return (
    <div
      className={`p-4 rounded-xl shadow-md transition-transform transform hover:scale-105 ${
        task.completed ? "bg-green-100 border-green-400" : "bg-white border"
      }`}
    >
      <h2
        className={`text-lg font-bold ${
          task.completed ? "line-through text-gray-500" : "text-gray-900"
        }`}
      >
        {task.title}
      </h2>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-xs text-gray-500">Due: {task.dueDate}</p>

      <div className="flex space-x-2 mt-3">
        <button
          onClick={() => onToggleComplete(task.id)}
          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onEdit(task)}
          className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
