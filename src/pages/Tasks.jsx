import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [form, setForm] = useState({
    title: "",
    desc: "",
    due: "",
    priority: "Medium",
  });
  const [editingId, setEditingId] = useState(null);

  // Add or Update Task
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    if (editingId) {
      setTasks(
        tasks.map((t) =>
          t.id === editingId ? { ...t, ...form, id: editingId } : t
        )
      );
      setEditingId(null);
    } else {
      const newTask = { ...form, id: Date.now(), completed: false };
      setTasks([newTask, ...tasks]);
    }

    setForm({ title: "", desc: "", due: "", priority: "Medium" });
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Edit Task
  const handleEdit = (task) => {
    setForm({
      title: task.title,
      desc: task.desc,
      due: task.due,
      priority: task.priority,
    });
    setEditingId(task.id);
  };

  // Delete Task
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this task?")) {
      setTasks(tasks.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="mt-20 p-6 min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 text-white">
      {/* 🕌 Task Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-emerald-800/60 p-6 rounded-2xl shadow-md space-y-4 max-w-2xl mx-auto backdrop-blur-md"
      >
        <h2 className="text-2xl font-semibold text-center">
          {editingId ? "Edit Task" : "Add New Task"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Task Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="p-2 rounded-lg text-black w-full"
            required
          />
          <input
            type="date"
            value={form.due}
            onChange={(e) => setForm({ ...form, due: e.target.value })}
            className="p-2 rounded-lg text-black w-full"
          />
        </div>

        <textarea
          placeholder="Description (optional)"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
          className="p-2 rounded-lg text-black w-full"
        />

        <div className="flex justify-between items-center">
          <select
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
            className="p-2 rounded-lg text-black"
          >
            <option value="Low">🟢 Low</option>
            <option value="Medium">🟡 Medium</option>
            <option value="High">🔴 High</option>
          </select>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg font-semibold transition duration-200"
          >
            {editingId ? "Update" : "Add Task"}
          </button>
        </div>
      </form>

      {/* 🧾 Task List */}
      <div className="max-w-5xl mx-auto mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length === 0 && (
          <p className="col-span-full text-center text-gray-300">
            🌙 Start by adding your first task!
          </p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-5 rounded-xl shadow-md transition-all duration-300 backdrop-blur-md ${
              task.completed
                ? "bg-emerald-900/40 line-through opacity-70"
                : "bg-emerald-800/60"
            }`}
          >
            <h3 className="text-xl font-bold text-emerald-300 mb-1">
              {task.title}
            </h3>
            {task.desc && (
              <p className="text-gray-200 text-sm mb-2">{task.desc}</p>
            )}
            {task.due && (
              <p className="text-sm text-yellow-300">
                📅 Due: {task.due}
              </p>
            )}
            <p
              className={`text-sm mt-1 ${
                task.priority === "High"
                  ? "text-red-400"
                  : task.priority === "Medium"
                  ? "text-yellow-400"
                  : "text-green-400"
              }`}
            >
              ⚡ Priority: {task.priority}
            </p>

            {/* Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => toggleComplete(task.id)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  task.completed
                    ? "bg-yellow-500 hover:bg-yellow-400"
                    : "bg-emerald-600 hover:bg-emerald-500"
                }`}
              >
                {task.completed ? "Undo" : "Complete"}
              </button>

              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(task)}
                  className="px-3 py-1 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="px-3 py-1 bg-red-500 hover:bg-red-400 rounded-lg text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
