import React from "react";

const Home = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 text-center flex flex-col items-center">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-green-700 mb-8">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h1>

      {/* Quotes Section */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 max-w-5xl w-full">
        {/* Quote Card 1 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition">
          <p className="text-base sm:text-lg text-gray-700 italic">
            “The most beloved of deeds to Allah are those that are most consistent, even if they are small.”
          </p>
          <p className="mt-4 text-green-600 font-semibold">– Prophet Muhammad ﷺ</p>
        </div>

        {/* Quote Card 2 */}
        <div className="bg-white shadow-md rounded-2xl p-6 border hover:shadow-lg transition">
          <p className="text-base sm:text-lg text-gray-700 italic">
            “Indeed, Allah loves those who rely upon Him.”
          </p>
          <p className="mt-4 text-green-600 font-semibold">– Qur’an 3:159</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
