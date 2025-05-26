"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";

export default function DonatePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [isMonthly, setIsMonthly] = useState(true);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const monthlyAmounts = ["$17", "$28", "$42", "$70"];
  const oneTimeAmounts = ["$25", "$50", "$100", "$250"];

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const handleToggle = (monthlySelected) => {
    setIsMonthly(monthlySelected);
    setSelectedAmount("");
    setCustomAmount("");
    setError("");
  };

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
    setError("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount("");
    if (!/^(?!0\d)\d+(.\d{1,2})?\$/.test(value)) {
      setError("Enter a valid number");
    } else {
      setError("");
    }
  };

  const handleContinue = () => {
    const amount = selectedAmount || `$${customAmount}`;
    const type = isMonthly ? "monthly" : "one-time";
    if (!amount || error) return;
    router.push(
      `/donate/card-details?amount=${amount.replace("$", "")}&type=${type}`
    );
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-sans text-gray-900">
      <Sidebar
        expanded={expanded}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />
      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      <div
        className={`transition-all duration-300 ${
          expanded ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side - Donation Form */}
            <div className="lg:w-3/5">
              <h1 className="text-4xl font-extrabold tracking-tight mb-6">
                Support KKC
              </h1>

              {/* Toggle */}
              <div className="flex bg-white rounded-full w-fit overflow-hidden border border-gray-300 shadow-sm text-base font-semibold mb-8">
                <button
                  onClick={() => handleToggle(false)}
                  className={`px-6 py-2 transition-all duration-300 ${
                    !isMonthly
                      ? "text-white bg-[#FF637A]"
                      : "text-gray-700 hover:bg-[#FFE5E9]"
                  }`}
                >
                  One-time
                </button>
                <button
                  onClick={() => handleToggle(true)}
                  className={`px-6 py-2 transition-all duration-300 ${
                    isMonthly
                      ? "text-white bg-[#FF637A]"
                      : "text-gray-700 hover:bg-[#FFE5E9]"
                  }`}
                >
                  Monthly
                </button>
              </div>

              {/* Donation Title */}
              <p className="text-xl font-medium mb-6">
                Choose an amount to donate{" "}
                <span className="text-[#FF637A] font-semibold">
                  {isMonthly ? "Monthly" : "One-time"}
                </span>
              </p>

              {/* Amount Options */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {(isMonthly ? monthlyAmounts : oneTimeAmounts).map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountClick(amount)}
                    className={`px-6 py-4 rounded-xl text-lg font-semibold border transition-all duration-300 ${
                      selectedAmount === amount
                        ? "bg-[#FF637A] text-white border-[#FF637A]"
                        : "bg-white border-gray-300 hover:border-[#FF637A]"
                    }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>

              {/* Other Amount */}
              <div className="mb-8">
                <label className="block text-lg font-medium mb-2">
                  Other Amount
                </label>
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-4 py-3 w-fit shadow-sm hover:border-[#FF637A] transition-colors">
                  <span className="text-lg font-semibold border-r border-gray-300 pr-2">
                    USD
                  </span>
                  <input
                    type="text"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="px-2 py-1 rounded-md w-24 font-semibold text-lg focus:outline-none"
                  />
                  <span className="text-lg font-semibold pl-1">$</span>
                </div>
                {error && (
                  <p className="text-red-600 text-sm font-medium mt-2">
                    {error}
                  </p>
                )}
              </div>

              {/* Continue Button */}
              <button
                className={`bg-[#FF637A] text-white text-lg px-8 py-3 rounded-xl font-semibold shadow transition-all w-full lg:w-auto ${
                  !selectedAmount && (!customAmount || error)
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#e04d65]"
                }`}
                onClick={handleContinue}
                disabled={!selectedAmount && (!customAmount || error)}
              >
                Continue
              </button>
            </div>

            {/* Right Side - Info */}
            <div className="lg:w-2/5 bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl shadow-lg p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                <div className="w-48 h-60 rounded-2xl overflow-hidden border-4 border-white ring-2 ring-[#FFD6DE] shadow-lg">
                  <img
                    src="/image (2).png"
                    alt="Support Profile"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h2 className="text-2xl font-bold text-[#FF637A]">
                  Help Us Do More
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Podcasts on KKC are completely free for everyone. If you value
                  what we're doing, consider supporting us. Every dollar helps
                  us create and share more resources and reach more learners.
                  Help us keep education open and accessible.
                </p>
                <p className="font-semibold text-sm text-gray-600">
                  – Founder & CEO
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
