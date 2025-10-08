import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function Home() {
  const data = useFetch("https://api.alquran.cloud/v1/ayah/random");

  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-emerald-300">Welcome to My Islamic To-Do</h1>

      <div className="bg-gradient-to-br from-emerald-800 via-teal-900 to-cyan-950 shadow-lg rounded-2xl p-8 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center">
          🌙 Daily Inspiration
        </h2>
        {data ? (
          <>
            <p className="italic text-lg mb-4">"{data.data.text}"</p>
            <p className="text-sm text-gray-300">— {data.data.surah.englishName} {data.data.numberInSurah}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
        <button
          onClick={() => window.location.reload()}
          className="mt-6 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition"
        >
          New Verse
        </button>
      </div>

      <Link
        to="/tasks"
        className="mt-8 bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-semibold transition"
      >
        Go to Tasks
      </Link>
    </div>
  );
}
