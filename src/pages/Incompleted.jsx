import useLocalStorage from "../hooks/useLocalStorage";

export default function IncompleteTasks() {
  const [tasks] = useLocalStorage("tasks", []);
  const incomplete = tasks.filter((t) => !t.completed);

  return (
    <div className="mt-20 text-center">
      <h2 className="text-2xl font-semibold mb-6 text-emerald-300">🕒 Incomplete Tasks</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {incomplete.length ? incomplete.map((task) => (
          <div key={task.id} className="bg-emerald-900 p-4 rounded-xl">
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.desc}</p>
          </div>
        )) : <p>No incomplete tasks yet.</p>}
      </div>
    </div>
  );
}
