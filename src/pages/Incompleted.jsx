import { useLocalStorage } from "../hooks/useLocalStorage";

export default function Incompleted() {
  const [tasks] = useLocalStorage("tasks", []);
  const incompleted = tasks.filter((t) => !t.completed);

  return (
    <div>
      <h2 className="text-3xl font-bold text-emerald-300 mb-6">
        🕒 Incomplete Tasks
      </h2>
      {incompleted.length === 0 ? (
        <p className="text-gray-300 italic">All tasks are completed. Great job!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {incompleted.map((t) => (
            <div
              key={t.id}
              className="bg-white/10 border border-white/20 rounded-3xl p-5 shadow-lg"
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
