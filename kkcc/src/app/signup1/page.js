"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const { currentUser } = useAuth(); // 🔐 Get current user

  /*
  // 🔒 Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      router.push("/dashboard");
    }
  }, [currentUser]); // This is still required to prevent already logged-in users from accessing the sign-up page
*/
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Redirect to the "SignUpTwo" page after successful sign-up
      router.push("/signup2"); // Redirect to the SignUpTwo page after successful sign-up
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // The useEffect will handle the redirection once the user is logged in
    } catch (err) {
      setError(err.message);
    }
  };

  const handleMouseDown = () => setShowPassword(true);
  const handleMouseUp = () => setShowPassword(false);

  return (
    <div className="min-h-screen flex bg-[#F1EFE7] text-[#000] font-sans overflow-hidden">
      {/* Left Panel */}
      <div className="w-2/5 relative flex flex-col justify-center items-center px-12 py-16 bg-white shadow-xl rounded-r-3xl z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF637A]/10 via-[#F1EFE7] to-white blur-2xl opacity-70 -z-10" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF637A]/20 rounded-full blur-xl -z-10" />
        <div className="absolute bottom-20 right-10 w-44 h-44 bg-[#FF637A]/10 rounded-full blur-3xl -z-10" />

        <div className="z-10 flex flex-col items-center text-center space-y-6">
          <div className="w-60 h-60 rounded-full overflow-hidden bg-gray-300 shadow-lg ring-4 ring-[#FF637A]/30">
            <img src="/profileA.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-2 px-4">
            <h1 className="text-3xl font-bold text-[#FF637A]">Fun Fact</h1>
            <p className="text-gray-600 text-base leading-relaxed">
              The KKC name? It started as a joke, became a team, then a movement.
              Now you're part of it.
            </p>
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-3/5 flex flex-col justify-center items-center px-16 py-16 space-y-10">
        <h2 className="text-4xl font-extrabold tracking-tight text-black leading-snug text-center">
          Join <span className="inline-block underline decoration-[#FF637A] underline-offset-4">KKC Today!</span>
        </h2>

        {/* Placeholder Social Buttons */}
        <div className="w-full max-w-md space-y-4">
          <button
            type="button"
            onClick={handleGoogleSignUp}
            className="w-full bg-[#B91C1C] text-white px-6 py-3 rounded-xl shadow hover:bg-[#991B1B] transition text-sm font-medium"
          >
            Continue with Google
          </button>

          <button className="w-full bg-[#0A66C2] text-white px-6 py-3 rounded-xl shadow hover:bg-[#004182] transition text-sm font-medium">
            Continue with LinkedIn
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 pt-6 w-full max-w-md">
          <div className="flex-grow h-px bg-gray-300" />
          <span>or... Just Use Email</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Sign Up Form */}
        <form
          onSubmit={handleSignUp}
          className="w-full max-w-md space-y-5 text-center"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] transition"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] transition"
            />
            <span
              className="absolute right-4 top-3.5 text-gray-500 cursor-pointer"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <FaRegEye />
            </span>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#FF637A] hover:bg-pink-600 text-white py-3 rounded-xl shadow-md text-lg font-semibold transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <Link href="/login" className="hover:underline text-[#FF637A]">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
