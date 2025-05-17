'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, db } from '../firebase'; // Make sure to import auth and db from firebase
import { setDoc, doc } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';

export default function SignUpTwo() {
  const { currentUser } = useAuth(); // Get current user
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [fade, setFade] = useState(true);
  const [currentFact, setCurrentFact] = useState(0);
  const router = useRouter();

  const funFacts = [
    'With KKC, smart advice feels like a cheat code.',
    'KKC actually started due to food prices going up!',
  ];

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      try {
        await setDoc(doc(db, 'users', currentUser.uid), {
          firstName,
          lastName,
          interests: selectedInterests,
          experience: selectedExperience,
        });
        router.push('/dashboard'); // Redirect to dashboard after saving
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    }
  };

  const handleInterestSelect = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleExperienceSelect = (range) => {
    setSelectedExperience(range);
  };

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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-[#FF637A] outline-none"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
                onClick={() => handleInterestSelect(option)}
                className={`px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition-all ${
                  selectedInterests.includes(option)
                    ? 'bg-[#FF637A] text-white'
                    : 'bg-white text-black'
                }`}
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
                onClick={() => handleExperienceSelect(range)}
                className={`px-6 py-2 border border-black rounded-lg ${
                  selectedExperience === range
                    ? 'bg-[#FF637A] text-white'
                    : 'bg-white text-black'
                } hover:border-2 transition-all`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Submit button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#FF637A] text-white py-3 rounded-xl shadow-md text-lg font-semibold transition"
        >
          Submit
        </button>
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
