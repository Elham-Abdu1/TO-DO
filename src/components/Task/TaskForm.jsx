import React, { useState } from "react";
import './TaskForm.css'

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      dueDate,
      priority,
    };

    // Call parent function (lifting state up)
    onSubmit(formData);

    // Reset form after submit
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label>
          Title (required):
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
      </div>

      <div>
        <label>
          Description (optional):
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Due Date:
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </label>
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
