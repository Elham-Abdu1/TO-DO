import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Completed() {
  const [tasks] = useLocalStorage("tasks", []);
  const completed = tasks.filter((t) => t.completed);

  return (
    <div>
      <h2 className="text-3xl font-bold text-emerald-300 mb-6">
        ✅ Completed Tasks
      </h2>
      {completed.length === 0 ? (
        <p className="text-gray-300 italic">No completed tasks yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {completed.map((t) => (
            <div
              key={t.id}
              className="bg-emerald-800/50 border border-emerald-500/40 rounded-3xl p-5 shadow-lg"
            >
              <h3 className="text-xl text-emerald-200 font-semibold">{t.title}</h3>
              <p className="text-gray-300 mb-2">{t.desc}</p>
              <p className="text-sm text-emerald-300">📅 Due: {t.due}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
