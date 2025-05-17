'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function DonatePage() {
  const [isMonthly, setIsMonthly] = useState(true);

  const monthlyAmounts = ['CA$17', 'CA$28', 'CA$42', 'CA$70'];
  const oneTimeAmounts = ['CA$25', 'CA$50', 'CA$100', 'CA$250'];

  const handleToggle = (monthlySelected) => setIsMonthly(monthlySelected);

  return (
    <div className="min-h-screen flex font-sans bg-[#F1EFE7] text-black">
      {/* LEFT SIDE */}
      <div className="w-3/5 flex flex-col justify-center px-20 py-20 space-y-10">
        <h1 className="text-5xl font-extrabold tracking-tight leading-tight">Support KKC</h1>

        {/* Toggle */}
        <div className="flex bg-white rounded-full w-fit overflow-hidden border border-black shadow-sm text-base font-semibold">
          <button
            onClick={() => handleToggle(false)}
            className={`px-6 py-2 transition-all duration-300 ${
              !isMonthly
                ? 'text-white bg-[#FF637A]'
                : 'text-black hover:bg-[#FFE5E9]'
            }`}
          >
            One-time
          </button>
          <button
            onClick={() => handleToggle(true)}
            className={`px-6 py-2 transition-all duration-300 ${
              isMonthly
                ? 'text-white bg-[#FF637A]'
                : 'text-black hover:bg-[#FFE5E9]'
            }`}
          >
            Monthly
          </button>
        </div>

        {/* Donation Title */}
        <p className="text-xl font-medium">
          Choose an amount to donate <span className="underline underline-offset-4">{isMonthly ? 'Monthly' : 'One-time'}</span>
        </p>

        {/* Amount Options */}
        <div className="grid grid-cols-2 gap-4">
          {(isMonthly ? monthlyAmounts : oneTimeAmounts).map((amount) => (
            <button
              key={amount}
              className="bg-white border border-black px-6 py-3 rounded-xl text-lg font-semibold transition-all duration-300 hover:bg-[#FFE5E9] hover:border-black"
            >
              {amount}
            </button>
          ))}
        </div>

        {/* Other Amount */}
        <div className="flex items-center gap-2 bg-[#FF637A] border border-black rounded-xl px-4 py-3 w-fit text-white shadow-sm">
          <span className="text-lg font-semibold border-r border-white pr-2">CAD</span>
          <input
            type="text"
            placeholder="Other"
            className="px-2 py-1 rounded-md w-24 text-black font-semibold text-lg focus:outline-none"
          />
          <span className="text-lg font-semibold pl-1">$</span>
        </div>

        {/* Continue Button */}
        <button className="bg-black text-white text-lg px-8 py-3 rounded-xl font-semibold shadow hover:opacity-90 transition-all w-fit">
          Continue
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-2/5 bg-white bg-opacity-80 backdrop-blur-lg rounded-l-3xl shadow-2xl flex flex-col items-center justify-center px-10 py-20 text-center space-y-6">
        <div className="w-64 h-80 rounded-3xl overflow-hidden border-4 border-white ring-2 ring-pink-300 shadow-lg">
          <Image
            src="/image (2).png"
            alt="Support Profile"
            width={256}
            height={320}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="text-3xl font-bold text-[#FF637A]">Help Us Do More</h2>
        <p className="text-base text-gray-800 max-w-sm leading-relaxed font-medium">
          Podcasts on KKC are completely free for everyone. If you value what we’re doing, consider supporting us. Every dollar helps us create and share more resources and reach more learners. Help us keep education open and accessible.
        </p>
        <p className="font-semibold text-sm text-gray-600">– Founder & CEO</p>
      </div>
    </div>
  );
}