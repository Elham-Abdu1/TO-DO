import useLocalStorage from "../hooks/useLocalStorage";

export default function CompletedTasks() {
  const [tasks] = useLocalStorage("tasks", []);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div className="mt-20 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">✅ Completed Tasks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {completed.length ? completed.map((task) => (
          <div key={task.id} className="bg-emerald-900 p-4 rounded-xl">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.desc}</p>
          </div>
        )) : <p>No completed tasks yet.</p>}
      </div>
    </div>
  );
}
