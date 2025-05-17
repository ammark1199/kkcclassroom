"use client";
import Link from "next/link";
import { FaRegEye} from "react-icons/fa";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth(); // 👈 get current user

  /*
  // 🔒 Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser]);
*/
  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); // 👈 manually push after successful login
      // No need to manually redirect — useEffect will do it
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();
  setError("");

  try {
    await signInWithPopup(auth, provider);
    router.push("/dashboard");
    // Redirect will be handled by useEffect
  } catch (err) {
    setError(err.message);
  }
};

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
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
            style={{ borderColor: "#000000", color: "#000000" }}
          />
        </div>

        <div className="mb-4 relative">
          <label className="block text-sm font-medium mb-1" style={{ color: "#000000" }}>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={e => setPassword(e.target.value)}
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
          <Link href="/reset" className="text-xs text-right mt-1 block text-[#FF637A] hover:underline">
            Forgot password?
          </Link>
        </div>

        {error && <p className="text-red-500 text-sm mb-2 text-center">{error}</p>}

        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-md mb-4"
          style={{ backgroundColor: "#FF637A", color: "#FFFFFF" }}
          onMouseEnter={e => e.target.style.backgroundColor = "#FF4E67"}
          onMouseLeave={e => e.target.style.backgroundColor = "#FF637A"}
        >
          Log In
        </button>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2" style={{ color: "#000000" }}>or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="space-y-2">
          <button 
            onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-50 text-black transition-all duration-200"
              >
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
            <Link href="/signup1" className="hover:underline" style={{ color: "#FF637A" }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
