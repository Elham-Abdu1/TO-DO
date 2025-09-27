import React from "react";

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div
      className={`p-4 border rounded-lg shadow-sm ${
        task.completed ? "bg-green-50 line-through opacity-70" : "bg-white"
      }`}
    >
      <h3 className="font-semibold text-lg text-green-800">{task.title}</h3>
      {task.description && (
        <p className="text-gray-600">{task.description}</p>
      )}
      <p className="text-sm text-gray-500">📅 {task.dueDate || "No due date"}</p>

      <p
        className={`text-sm font-medium mt-1 ${
          task.priority === "High"
            ? "text-red-600"
            : task.priority === "Medium"
            ? "text-yellow-600"
            : "text-green-600"
        }`}
      >
        🔥 {task.priority} Priority
      </p>

      <div className="mt-3 flex space-x-2">
        <button
          className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button
          className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          onClick={() => onEdit(task)}
        >
          Edit
        </button>
        <button
          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
