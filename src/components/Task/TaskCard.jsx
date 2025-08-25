import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task }) => {
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
    </div>
  );
};

export default TaskCard;
