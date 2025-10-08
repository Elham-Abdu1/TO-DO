import React, { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";

/**
 * Home page: shows a random ayah.
 * - Generates a random ayah id (1..6236)
 * - Calls useFetch with the ayah URL
 * - "New Verse" sets a new id, causing the hook to fetch the new URL
 */
const getRandomAyahId = () => Math.floor(Math.random() * 6236) + 1;

export default function Home() {
  const [ayahId, setAyahId] = useState(() => getRandomAyahId());

  // build URL each render (useMemo is optional)
  const ayahUrl = useMemo(() => `https://api.alquran.cloud/v1/ayah/${ayahId}`, [ayahId]);

  // useFetch will run whenever ayahUrl changes
  const { data, loading, error, refetch } = useFetch(ayahUrl);

  // click handler to request a new random ayah
  const handleNewVerse = () => {
    const newId = getRandomAyahId();
    // ensure new random (in the unlikely event the same was generated)
    if (newId === ayahId) {
      setAyahId(getRandomAyahId());
    } else {
      setAyahId(newId);
    }
    // optional: explicit refetch call (not required because initialUrl changes),
    // but safe to call to ensure immediate fetch:
    // refetch(`https://api.alquran.cloud/v1/ayah/${newId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
      <h1 className="text-3xl sm:text-4xl font-bold text-emerald-300 mb-6 drop-shadow-lg">
        Welcome — Daily Verse
      </h1>

      <div className="bg-white/10 backdrop-blur-md border border-emerald-400/30 rounded-3xl p-8 shadow-2xl w-full max-w-3xl">
        <h2 className="text-xl sm:text-2xl font-semibold text-emerald-300 mb-4">
          🕌 Inspiration from the Qur'an
        </h2>

        {loading && <p className="text-gray-300 animate-pulse">Fetching verse...</p>}

        {error && (
          <p className="text-red-300">Could not fetch verse: {error}</p>
        )}

        {!loading && !error && data && (
          <>
            {/* alquran.cloud returns data.data.text (Arabic) and data.data.surah */}
            <p className="text-lg sm:text-xl italic text-emerald-100 leading-relaxed mb-4">
              {data?.data?.text || "No text available"}
            </p>
            <p className="text-emerald-300 font-semibold">
              — {data?.data?.surah?.englishName} ({data?.data?.numberInSurah})
            </p>
          </>
        )}

        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={handleNewVerse}
            className="bg-emerald-500 hover:bg-emerald-600 transition px-4 py-2 rounded-lg shadow-lg font-semibold"
          >
            New Verse
          </button>

          <button
            onClick={() => refetch(ayahUrl)}
            className="bg-yellow-500 hover:bg-yellow-600 transition px-4 py-2 rounded-lg shadow-lg font-semibold text-black"
          >
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
