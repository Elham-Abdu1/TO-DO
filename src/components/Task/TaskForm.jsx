import React, { useState, useEffect } from "react";
import "./TaskForm.css";

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");

  // When editing, pre-fill the form
  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description || "");
      setDueDate(initialTask.dueDate || "");
      setPriority(initialTask.priority || "Low");
    }
  }, [initialTask]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      title,
      description,
      dueDate,
      priority,
    };

    onSubmit(formData);

    // Reset after submit
    setTitle("");
    setDescription("");
    setDueDate("");
    setPriority("Low");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>Title (required):</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label>Description (optional):</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Due Date:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Priority:</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">
        {initialTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
