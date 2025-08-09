import React from 'react';
import './TaskCard.css';

const TaskCard = ({ title, dueDate, imgSrc }) => {
  return (
    <div className="task-card">
      {imgSrc && <img src={imgSrc} alt={title} className="task-img" />}
      <h2 className="task-title">{title}</h2>
      <p className="task-date">Due: {dueDate}</p>
    </div>
  );
};

export default TaskCard;
