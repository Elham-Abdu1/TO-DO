import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";
import Modal from "../Modal";
import useLocalStorage from "../../hooks/useLocalStorage";

const TaskApp = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Add or update task
  const handleAddOrEditTask = (newTask) => {
    if (taskToEdit) {
      setTasks(
        tasks.map((t) => (t.id === taskToEdit.id ? { ...newTask, id: t.id } : t))
      );
      setTaskToEdit(null);
    } else {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((t) =>
        t.id === taskId ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  return (
    <div className="p-6">
      {/* Add Task Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-6 px-6 py-3 bg-green-700 text-white rounded-lg shadow-md hover:bg-green-800 transition-transform transform hover:scale-105"
      >
        ➕ Add Task
      </button>

      {/* Task Grid */}
      {tasks.length === 0 ? (
        <p className="text-center text-gray-600">Start by adding your first task!</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onToggleComplete={handleToggleComplete}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
            />
          ))}
        </div>
      )}

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TaskForm
          onSubmit={handleAddOrEditTask}
          taskToEdit={taskToEdit}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default TaskApp;
