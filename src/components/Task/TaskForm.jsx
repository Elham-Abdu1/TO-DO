import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, editingTask, clearEditing }) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
    } else {
      setTitle("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add or edit a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">{editingTask ? "Update" : "Add"}</button>
      {editingTask && (
        <button type="button" onClick={clearEditing} className="cancel-btn">
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;
