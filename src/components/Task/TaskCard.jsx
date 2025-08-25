import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      {/* Title */}
      <h2 className="task-title">{task.title}</h2>

      {/* Description (hide if empty) */}
      {task.description && (
        <p className="task-description">{task.description}</p>
      )}

      {/* Due Date & Priority */}
      <div className="task-meta">
        <span className="task-date">
          Due: {task.dueDate || "Not set"}
        </span>
        <span className={`task-priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </div>

      {/* Completion status */}
      <div className="task-status">
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </div>

      {/* Action Buttons */}
      <div className="task-actions">
        <button
          className="btn-complete"
          onClick={() => onToggleComplete(task.id)}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button className="btn-edit" onClick={() => onEdit(task.id)}>
          Edit
        </button>
        <button className="btn-delete" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
