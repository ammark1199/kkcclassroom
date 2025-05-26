"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { ShoppingCartIcon, ArrowLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function ShopPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("coaching");
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [cart, setCart] = useState([]);
  const [datePromptCoach, setDatePromptCoach] = useState(null);
  const [showCart, setShowCart] = useState(false);

  const coaches = [
    { 
      name: "Sarah Johnson", 
      photo: "https://randomuser.me/api/portraits/women/44.jpg", 
      description: "Former McKinsey consultant with 8+ years experience specializing in case interview preparation",
      expertise: ["Case Interviews", "Behavioral Interviews", "Resume Review"],
      rating: 4.9
    },
    { 
      name: "Michael Chen", 
      photo: "https://randomuser.me/api/portraits/men/32.jpg", 
      description: "Ex-Goldman Sachs investment banker with expertise in technical interview prep",
      expertise: ["Technical Questions", "Financial Modeling", "LBO Analysis"],
      rating: 4.8
    },
    { 
      name: "David Rodriguez", 
      photo: "https://randomuser.me/api/portraits/men/65.jpg", 
      description: "Career coach specializing in MBA applications and career transitions",
      expertise: ["MBA Applications", "Career Strategy", "Networking"],
      rating: 4.7
    },
    { 
      name: "Emily Wilson", 
      photo: "https://randomuser.me/api/portraits/women/68.jpg", 
      description: "Former BCG consultant focused on industry-specific case preparation",
      expertise: ["Healthcare Cases", "Tech Cases", "Nonprofit Cases"],
      rating: 4.9
    },
  ];

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const addToCart = (coach) => {
    setDatePromptCoach(coach);
  };

  const confirmAddToCart = (coach, date, time) => {
    setCart((prev) => [...prev, { 
      ...coach, 
      price: 99, 
      date, 
      time,
      sessionType: "1:1 Coaching"
    }]);
    setDatePromptCoach(null);
  };

  const removeFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900">
      <Sidebar 
        expanded={expanded} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />
      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">KKC Marketplace</h1>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
              Book coaching sessions and access premium resources to accelerate your career
            </p>
          </div>

          {/* Cart Button (Mobile) */}
          <button 
            onClick={() => setShowCart(true)}
            className="lg:hidden fixed bottom-6 right-6 bg-[#FF637A] text-white p-3 rounded-full shadow-lg z-40"
          >
            <ShoppingCartIcon className="w-6 h-6" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-white text-[#FF637A] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>

          {/* Cart Sidebar */}
          <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl z-50 transform ${showCart ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <ShoppingCartIcon className="w-6 h-6 text-[#FF637A]" />
                  Your Cart
                </h3>
                <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center">
                  <ShoppingCartIcon className="w-16 h-16 text-gray-300 mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                  <button 
                    onClick={() => setShowCart(false)}
                    className="mt-4 text-[#FF637A] hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex-grow overflow-y-auto">
                    <ul className="divide-y divide-gray-200">
                      {cart.map((item, index) => (
                        <li key={index} className="py-4">
                          <div className="flex justify-between">
                            <div className="flex gap-3">
                              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                {item.photo && (
                                  <img src={item.photo} alt={item.name} className="w-full h-full object-cover" />
                                )}
                              </div>
                              <div>
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.sessionType}</p>
                                {item.date && (
                                  <p className="text-xs text-gray-500 mt-1">
                                    {item.date} @ {item.time}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex flex-col items-end">
                              <span className="font-medium">${item.price.toFixed(2)}</span>
                              <button 
                                onClick={() => removeFromCart(index)}
                                className="text-red-500 hover:text-red-700 text-xs mt-1"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-bold mb-6">
                      <span>Total:</span>
                      <span>${calculateTotal().toFixed(2)}</span>
                    </div>
                    <button className="w-full bg-[#FF637A] text-white py-3 rounded-lg hover:bg-[#e55a6e] transition">
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-xl shadow-sm border border-gray-200 p-1">
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${activeTab === "coaching" ? "bg-[#FF637A] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                onClick={() => {
                  setActiveTab("coaching");
                  setSelectedCoach(null);
                }}
              >
                1:1 Coaching
              </button>
              <button
                className={`px-6 py-2 rounded-lg text-sm font-medium transition ${activeTab === "resources" ? "bg-[#FF637A] text-white" : "text-gray-700 hover:bg-gray-50"}`}
                onClick={() => {
                  setActiveTab("resources");
                  setSelectedCoach(null);
                }}
              >
                Premium Resources
              </button>
            </div>
          </div>

          {/* Coaching Section */}
          {activeTab === "coaching" && (
            <div className="space-y-12">
              {!selectedCoach ? (
                <>
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Your Perfect Coach</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Get personalized guidance from our network of top-tier consultants and bankers
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {coaches.map((coach, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
                      >
                        <div className="flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow">
                              <img src={coach.photo} alt={coach.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h3 className="font-bold text-gray-900">{coach.name}</h3>
                              <div className="flex items-center text-yellow-500 text-sm">
                                {[...Array(5)].map((_, i) => (
                                  <span key={i}>{i < Math.floor(coach.rating) ? '★' : '☆'}</span>
                                ))}
                                <span className="text-gray-500 ml-1">{coach.rating}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700 text-sm mb-4 flex-grow">{coach.description}</p>
                          <div className="mb-4">
                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Expertise</h4>
                            <div className="flex flex-wrap gap-2">
                              {coach.expertise.map((skill, i) => (
                                <span key={i} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between pt-4 mt-auto">
                            <button
                              className="border border-[#FF637A] text-[#FF637A] px-4 py-2 rounded-lg text-sm hover:bg-[#FF637A]/10 transition"
                              onClick={() => setSelectedCoach(coach)}
                            >
                              View Profile
                            </button>
                            <button
                              className="bg-[#FF637A] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#e55a6e] transition"
                              onClick={() => addToCart(coach)}
                            >
                              Book Now ($99)
                            </button>
                          </div>

                          {datePromptCoach?.name === coach.name && (
                            <div className="pt-4 space-y-3 mt-4 border-t border-gray-200">
                              <h4 className="text-sm font-medium text-gray-900">Select Session Time</h4>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Date</label>
                                <input
                                  type="date"
                                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                                  onChange={(e) => coach.selectedDate = e.target.value}
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-medium text-gray-500 mb-1">Time</label>
                                <input
                                  type="time"
                                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                                  onChange={(e) => coach.selectedTime = e.target.value}
                                />
                              </div>
                              <button
                                className="w-full bg-[#FF637A] text-white py-2 rounded-lg hover:bg-[#e55a6e] transition text-sm"
                                onClick={() => confirmAddToCart(coach, coach.selectedDate, coach.selectedTime)}
                              >
                                Confirm Booking
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
                  <button
                    onClick={() => setSelectedCoach(null)}
                    className="flex items-center text-[#FF637A] hover:underline mb-6"
                  >
                    <ArrowLeftIcon className="w-4 h-4 mr-1" />
                    Back to Coaches
                  </button>
                  
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white shadow">
                          <img src={selectedCoach.photo} alt={selectedCoach.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-gray-900">{selectedCoach.name}</h2>
                          <div className="flex items-center text-yellow-500">
                            {[...Array(5)].map((_, i) => (
                              <span key={i}>{i < Math.floor(selectedCoach.rating) ? '★' : '☆'}</span>
                            ))}
                            <span className="text-gray-500 ml-1">{selectedCoach.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                          <p className="text-gray-700">{selectedCoach.description}</p>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Areas of Expertise</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedCoach.expertise.map((skill, i) => (
                              <span key={i} className="bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-[#FF637A] mb-4">Book a Session</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Select Date</label>
                          <input 
                            type="date" 
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent" 
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Select Time</label>
                          <input 
                            type="time" 
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent" 
                          />
                        </div>
                        <div className="pt-2">
                          <button 
                            className="w-full bg-[#FF637A] text-white py-3 rounded-lg hover:bg-[#e55a6e] transition font-medium"
                            onClick={() => {
                              addToCart(selectedCoach);
                              setShowCart(true);
                            }}
                          >
                            Add to Cart - $99
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Resources Section */}
          {activeTab === "resources" && (
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 max-w-4xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-[#FF637A] mb-2">Premium Resources</h2>
                <p className="text-gray-600 mb-8">Coming soon - exclusive templates, frameworks, and guides</p>
                <div className="bg-gray-50 p-12 rounded-lg border-2 border-dashed border-gray-300">
                  <p className="text-gray-500">New resources launching soon</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}