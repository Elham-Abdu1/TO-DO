import React from "react";
import "./TaskCard.css";

const TaskCard = ({ task, onToggleComplete, onDeleteTask, onEditTask }) => {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3 className="task-title">
        {task.completed ? <s>{task.title}</s> : task.title}
      </h3>
      {task.description && <p className="task-desc">{task.description}</p>}
      <p className="task-meta">
        Due: {task.dueDate} | <span className={`priority ${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </p>

      <div className="task-actions">
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Undo" : "Complete"}
        </button>
        <button onClick={() => onEditTask(task)}>Edit</button>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
