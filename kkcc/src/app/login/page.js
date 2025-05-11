"use client";

import { useState } from "react";
import { FaRegEye } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDown = () => setShowPassword(true);
  const handleMouseUp = () => setShowPassword(false);

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F1EFE7" }}>
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#000000" }}>Log In</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" style={{ color: "#000000" }}>Email or Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            style={{ borderColor: "#000000", color: "#000000" }}
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1" style={{ color: "#000000" }}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            style={{ borderColor: "#000000", color: "#000000" }}
          />
          <span
            className="absolute right-3 top-9 text-gray-500 cursor-pointer"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <FaRegEye />
          </span>
          <p className="text-xs text-right mt-1 cursor-pointer" style={{ color: "#FF637A" }}>Forgot password?</p>
        </div>

        <button className="w-full py-2 rounded-md mb-4" style={{ backgroundColor: "#FF637A", color: "#FFFFFF" }} onMouseEnter={e => e.target.style.backgroundColor = "#FF4E67"} onMouseLeave={e => e.target.style.backgroundColor = "#FF637A"}>
          Log In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2" style={{ color: "#000000" }}>or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-2">
          <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 text-black transition-all duration-200">
            Log in with Google
          </button>
          <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 text-black transition-all duration-200">
            Log in with LinkedIn
          </button>
        </div>

        <p className="text-xs text-center mt-6" style={{ color: "#000000" }}>
          By logging in, you agree to our{" "}
          <span className="hover:underline cursor-pointer" style={{ color: "#FF637A" }}>Terms</span> and{" "}
          <span className="hover:underline cursor-pointer" style={{ color: "#FF637A" }}>Privacy Policy</span>.
        </p>

        <div className="text-center mt-4">
          <p className="text-sm" style={{ color: "#000000" }}>
            Don’t have an account?{" "}
            <button className="hover:underline" style={{ color: "#FF637A" }}>Sign up</button>
          </p>
        </div>
      </div>
    </div>
  );
}
