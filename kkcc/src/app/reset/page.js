"use client";

import { useState } from "react";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "#F1EFE7" }}>
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md border border-gray-200">
        <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: "#000000" }}>Reset Password</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" style={{ color: "#000000" }}>Enter your email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            style={{ borderColor: "#000000", color: "#000000" }}
          />
        </div>

        <button
          className="w-full py-2 rounded-md mb-4"
          style={{ backgroundColor: "#FF637A", color: "#FFFFFF" }}
          onMouseEnter={(e) => e.target.style.backgroundColor = "#FF4E67"}
          onMouseLeave={(e) => e.target.style.backgroundColor = "#FF637A"}
        >
          Send Reset Link
        </button>

        <div className="text-center mt-4">
          <p className="text-sm" style={{ color: "#000000" }}>
            Remember your password?{" "}
            <a href="/login" className="hover:underline" style={{ color: "#FF637A" }}>
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
