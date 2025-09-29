import React from "react";

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between hover:shadow-xl transition">
      <h2
        className={`text-lg font-semibold ${
          task.completed ? "line-through text-gray-500" : ""
        }`}
      >
        {task.title}
      </h2>
      <p className="text-sm text-gray-600">{task.date}</p>

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`px-3 py-1 rounded text-white text-sm transition ${
            task.completed
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button
          onClick={() => onEdit(task.id, { title: prompt("Edit Task", task.title) })}
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm transition"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="px-3 py-1 rounded bg-red-500 hover:bg-red-600 text-white text-sm transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
