"use client";

import { useState } from "react";

export default function LearningPreferencesPage() {
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState([
    { track: "Investment Banking", unit: 4, endDate: "2024-07-01", completed: false },
  ]);

  const addGoal = () => {
    const newGoal = { track: selectedTrack, unit: selectedUnit, endDate, completed: false };
    setGoals([...goals, newGoal]);
    setShowGoalForm(false);
    setSelectedTrack("");
    setSelectedUnit(1);
    setEndDate("");
  };

  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  const completeGoal = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = true;
    setGoals(updatedGoals);
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] text-[#000] px-6 py-12 font-sans">
      <h1 className="text-4xl font-extrabold text-center underline decoration-[#FF637A] underline-offset-8 mb-10">
        Learning Preferences
      </h1>

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto bg-white p-6 rounded-xl shadow space-y-6 md:space-y-0 md:space-x-10">
        <div className="w-32 h-32 bg-gray-300 rounded-full" />
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h2 className="text-xl font-semibold">Welcome Back!</h2>
          <p className="text-sm text-gray-600">Track your consulting and investment banking goals here.</p>
        </div>
        <button
          onClick={() => setShowGoalForm(!showGoalForm)}
          className="bg-[#FF637A] text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
        >
          + Add New Goal
        </button>
      </div>

      {/* Current Goals */}
      <div className="max-w-5xl mx-auto mt-12">
        <h3 className="text-2xl font-bold mb-4 text-[#FF637A]">Current Goals</h3>
        <ul className="space-y-3 text-gray-800">
          {goals.filter((goal) => !goal.completed).map((goal, index) => (
            <li key={index} className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
              <span>{goal.track} - Unit {goal.unit} by {goal.endDate}</span>
              <div className="space-x-2">
                <button
                  onClick={() => completeGoal(index)}
                  className="text-sm text-green-600 hover:underline"
                >
                  Mark as Completed
                </button>
                <button
                  onClick={() => removeGoal(index)}
                  className="text-sm text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Completed Goals */}
      <div className="max-w-5xl mx-auto mt-10">
        <h3 className="text-2xl font-bold mb-4 text-[#FF637A]">Completed Goals</h3>
        <ul className="space-y-3 text-gray-800">
          {goals.filter((goal) => goal.completed).map((goal, index) => (
            <li key={index} className="bg-white rounded-lg p-4 shadow flex justify-between items-center">
              <span>{goal.track} - Unit {goal.unit} by {goal.endDate}</span>
              <button
                onClick={() => removeGoal(index)}
                className="text-sm text-red-500 hover:underline"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Goal Form */}
      {showGoalForm && (
        <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded-xl shadow space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1">Select Track</label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={selectedTrack}
              onChange={(e) => setSelectedTrack(e.target.value)}
            >
              <option value="">-- Choose --</option>
              <option value="Consulting">Consulting</option>
              <option value="Investment Banking">Investment Banking</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Select Unit (1-10)</label>
            <select
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(Number(e.target.value))}
            >
              {[...Array(10)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  Unit {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Select End Date</label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-4 py-2"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-[#FF637A] text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
            onClick={addGoal}
          >
            Save Goal
          </button>
        </div>
      )}
    </div>
  );
}
