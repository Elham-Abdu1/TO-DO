import React from "react";

const TaskCard = ({ task, onToggleComplete, onDelete, onEdit }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <span>{task.title}</span>
      <div className="actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
