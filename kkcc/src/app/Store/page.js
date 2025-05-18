"use client";

import { useState } from "react";

export default function ShopPage() {
  const [activeTab, setActiveTab] = useState("coaching");
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [cart, setCart] = useState([]);
  const [datePromptCoach, setDatePromptCoach] = useState(null);

  const coaches = [
    { name: "Coach A", photo: "", description: "Bio placeholder for Coach A" },
    { name: "Coach B", photo: "", description: "Bio placeholder for Coach B" },
    { name: "Coach C", photo: "", description: "Bio placeholder for Coach C" },
    { name: "Coach D", photo: "", description: "Bio placeholder for Coach D" },
    { name: "Coach E", photo: "", description: "Bio placeholder for Coach E" },
    { name: "Coach F", photo: "", description: "Bio placeholder for Coach F" },
  ];

  const addToCart = (coach) => {
    setDatePromptCoach(coach);
  };

  const confirmAddToCart = (coach, date, time) => {
    setCart((prev) => [...prev, { ...coach, price: 5, date, time }]);
    setDatePromptCoach(null);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] text-[#000] px-6 py-12 font-sans relative">
      <h1 className="text-4xl font-extrabold text-center underline decoration-[#FF637A] underline-offset-8 mb-10">Shop</h1>

      {/* Cart Popout */}
      <div className="fixed top-6 right-6 bg-white border border-gray-300 rounded-xl shadow-lg p-4 w-80 z-50">
        <h3 className="text-lg font-semibold mb-3 text-[#FF637A]">Shopping Cart</h3>
        {cart.length === 0 ? (
          <p className="text-sm text-gray-600">No items added yet.</p>
        ) : (
          <ul className="space-y-2 text-sm text-gray-800">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-start gap-2">
                <div>
                  <div className="font-medium">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.date} @ {item.time}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span>${item.price.toFixed(2)}</span>
                  <button onClick={() => removeFromCart(index)} className="text-red-500 hover:underline text-xs">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center space-x-6 mb-12">
        <button
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "coaching" ? "bg-[#FF637A] text-white" : "bg-white text-black border border-gray-300"}`}
          onClick={() => {
            setActiveTab("coaching");
            setSelectedCoach(null);
          }}
        >
          1:1 Coaching
        </button>
        <button
          className={`px-4 py-2 rounded-xl text-sm font-medium transition ${activeTab === "resources" ? "bg-[#FF637A] text-white" : "bg-white text-black border border-gray-300"}`}
          onClick={() => {
            setActiveTab("resources");
            setSelectedCoach(null);
          }}
        >
          Other Useful Resources
        </button>
      </div>

      {/* Coaching Section */}
      {activeTab === "coaching" && (
        <div className="space-y-12 max-w-6xl mx-auto">
          {!selectedCoach ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {coaches.map((coach, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-md space-y-3"
                >
                  <h3 className="text-lg font-semibold text-[#FF637A]">{coach.name}</h3>
                  <div className="flex gap-4 items-center">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 text-sm">{coach.description}</p>
                  </div>
                  <div className="flex justify-between pt-4">
                    <button
                      className="bg-[#FF637A] text-white px-4 py-2 rounded-lg text-sm hover:bg-pink-600"
                      onClick={() => setSelectedCoach(coach)}
                    >
                      View Profile
                    </button>
                    <button
                      className="border border-[#FF637A] text-[#FF637A] px-4 py-2 rounded-lg text-sm hover:bg-[#FF637A]/10"
                      onClick={() => addToCart(coach)}
                    >
                      Add ($5)
                    </button>
                  </div>

                  {datePromptCoach?.name === coach.name && (
                    <div className="pt-4 space-y-3">
                      <input
                        type="date"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        onChange={(e) => coach.selectedDate = e.target.value}
                      />
                      <input
                        type="time"
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                        onChange={(e) => coach.selectedTime = e.target.value}
                      />
                      <button
                        className="w-full bg-[#FF637A] text-white py-2 rounded hover:bg-pink-600"
                        onClick={() => confirmAddToCart(coach, coach.selectedDate, coach.selectedTime)}
                      >
                        Confirm Add to Cart
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white p-10 rounded-xl shadow max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-[#FF637A]">{selectedCoach.name}</h2>
                  <p className="text-gray-700">{selectedCoach.description}</p>
                  <div className="pt-4 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Date:</label>
                      <input type="date" className="border rounded px-4 py-2 w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Select Time:</label>
                      <input type="time" className="border rounded px-4 py-2 w-full" />
                    </div>
                    <button className="w-full mt-4 bg-[#FF637A] text-white px-6 py-3 rounded-lg hover:bg-pink-600 transition">Book Session</button>
                    <button
                      className="block mx-auto mt-2 text-sm text-gray-500 hover:underline"
                      onClick={() => setSelectedCoach(null)}
                    >
                      Back to Coaches
                    </button>
                  </div>
                </div>
                <div className="w-full flex justify-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Resources Section */}
      {activeTab === "resources" && (
        <div className="bg-white p-8 rounded-xl shadow max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#FF637A] mb-4">Other Useful Resources</h2>
          <p className="text-gray-700">This section is under construction. Stay tuned!</p>
        </div>
      )}
    </div>
  );
}
