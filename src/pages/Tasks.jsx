import { useLocalStorage } from "../hooks/useLocalStorage";
import { useState } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [modal, setModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", desc: "", due: "" });

  const handleAdd = () => {
    if (!newTask.title.trim()) return;
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
    setNewTask({ title: "", desc: "", due: "" });
    setModal(false);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-emerald-300">📋 Your Tasks</h2>
        <button
          onClick={() => setModal(true)}
          className="bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg shadow-lg font-semibold"
        >
          + Add Task
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.length === 0 && (
          <p className="text-gray-300 italic col-span-full text-center">
            No tasks yet — add one above.
          </p>
        )}

        {tasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-3xl p-5 shadow-xl transition transform hover:scale-[1.03] hover:shadow-emerald-500/30 backdrop-blur-md border ${
              task.completed
                ? "bg-emerald-800/50 border-emerald-500/40"
                : "bg-white/10 border-white/20"
            }`}
          >
            <h3 className="text-xl font-semibold text-emerald-200 mb-2">
              {task.title}
            </h3>
            <p className="text-gray-300 mb-2">{task.desc}</p>
            <p className="text-sm text-emerald-300 mb-4">
              📅 Due: {task.due || "—"}
            </p>
            <button
              onClick={() => toggleComplete(task.id)}
              className={`w-full py-2 rounded-xl transition font-semibold ${
                task.completed
                  ? "bg-gray-500 hover:bg-gray-600"
                  : "bg-emerald-500 hover:bg-emerald-600"
              }`}
            >
              {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
            </button>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/60 backdrop-blur-sm">
          <div className="bg-emerald-900/90 border border-emerald-500/30 rounded-3xl p-8 w-11/12 sm:w-[400px] shadow-2xl">
            <h3 className="text-2xl mb-4 font-semibold text-emerald-300">
              Add New Task
            </h3>

            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              className="w-full mb-3 p-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none"
            />
            <textarea
              placeholder="Task description"
              value={newTask.desc}
              onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
              className="w-full mb-3 p-2 rounded-lg bg-white/20 placeholder-gray-300 focus:outline-none"
            />
            <input
              type="date"
              value={newTask.due}
              onChange={(e) => setNewTask({ ...newTask, due: e.target.value })}
              className="w-full mb-4 p-2 rounded-lg bg-white/20 focus:outline-none"
            />

            <div className="flex justify-between">
              <button
                onClick={handleAdd}
                className="bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg shadow-md"
              >
                Add
              </button>
              <button
                onClick={() => setModal(false)}
                className="bg-gray-500 hover:bg-gray-600 transition px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
