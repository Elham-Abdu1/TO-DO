import { useFetch } from "../hooks/useFetch";
import { useState } from "react";

export default function Home() {
  const [ayah, setAyah] = useState(Math.floor(Math.random() * 6236) + 1);
  const { data, loading } = useFetch(`https://api.alquran.cloud/v1/ayah/${ayah}`);

  const getNewVerse = () => setAyah(Math.floor(Math.random() * 6236) + 1);

  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-6 drop-shadow-lg">
        Welcome to My Islamic To-Do
      </h1>

      <div className="bg-white/10 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 shadow-2xl w-full max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-semibold text-emerald-300 mb-4">
          🕌 Daily Inspiration
        </h2>

        {loading ? (
          <p className="text-gray-300 animate-pulse">Fetching verse...</p>
        ) : (
          <>
            <p className="text-lg sm:text-xl italic text-emerald-100 leading-relaxed mb-4">
              “{data?.data?.text}”
            </p>
            <p className="text-emerald-300 font-semibold">
              — {data?.data?.surah?.englishName} ({data?.data?.numberInSurah})
            </p>
          </>
        )}

        <button
          onClick={getNewVerse}
          className="mt-6 bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg shadow-lg font-semibold"
        >
          New Verse
        </button>
      </div>
    </div>
  );
}
