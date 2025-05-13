'use client';
import { useEffect, useState } from 'react';

export default function SignUpTwo() {
  const funFacts = [
    'With KKC, smart advice feels like a cheat code.',
    'KKC actually started due to food prices going up!'
  ];

  const [currentFact, setCurrentFact] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentFact((prev) => (prev + 1) % funFacts.length);
        setFade(true);
      }, 400);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex font-sans bg-[#F1EFE7] text-black">
      {/* LEFT SIDE */}
      <div className="w-3/5 flex flex-col justify-center px-12 py-16 space-y-10">
        <h1 className="text-4xl font-bold mb-4">Almost Done!</h1>

        {/* Name inputs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="First name"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#FF637A] outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#FF637A] outline-none"
          />
        </div>

        {/* Interest buttons */}
        <div className="space-y-3">
          <p className="text-lg font-semibold">Interested in...</p>
          <div className="flex gap-4">
            {['Consulting', 'Finance'].map((option) => (
              <button
                key={option}
                className="bg-[#FF637A] text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 hover:border hover:border-black transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Experience buttons */}
        <div className="space-y-3">
          <p className="text-lg font-semibold">How many years of experience do you have?</p>
          <div className="flex gap-4 flex-wrap">
            {['0-2', '2-5', '5+'].map((range) => (
              <button
                key={range}
                className="px-6 py-2 border border-black rounded-lg bg-white hover:border-2 transition-all"
              >
                {range}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/5 bg-white rounded-l-3xl shadow-xl flex flex-col items-center justify-center px-8 py-16">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white ring-2 ring-pink-300 shadow">
          <img
            src="/Nice3.jpg"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center mt-6">
          <p className="text-2xl font-bold text-[#FF637A]">Fun Fact!</p>
          <p
            className={`mt-2 text-gray-800 text-lg transition-opacity duration-500 ease-in-out ${
              fade ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {funFacts[currentFact]}
          </p>
        </div>
      </div>
    </div>
  );
}
