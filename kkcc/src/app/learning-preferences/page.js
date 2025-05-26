"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { Bars3Icon, XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function LearningPreferencesPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");
  const [selectedUnit, setSelectedUnit] = useState(1);
  const [endDate, setEndDate] = useState("");
  const [goals, setGoals] = useState([
    { 
      track: "Investment Banking", 
      unit: 4, 
      endDate: "2024-07-01", 
      completed: false,
      createdAt: new Date("2024-05-20")
    },
  ]);

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const addGoal = () => {
    if (!selectedTrack || !endDate) return;
    
    const newGoal = { 
      track: selectedTrack, 
      unit: selectedUnit, 
      endDate, 
      completed: false,
      createdAt: new Date()
    };
    setGoals([...goals, newGoal]);
    setShowGoalForm(false);
    setSelectedTrack("");
    setSelectedUnit(1);
    setEndDate("");
  };

  const removeGoal = (index) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  const toggleGoalCompletion = (index) => {
    const updatedGoals = [...goals];
    updatedGoals[index].completed = !updatedGoals[index].completed;
    setGoals(updatedGoals);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getDaysRemaining = (endDate) => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? `${diffDays} days left` : "Due date passed";
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Learning Preferences</h1>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
              Set and track your learning goals to stay on top of your career preparation
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF637A] to-[#FF8E53] flex items-center justify-center text-white text-2xl font-bold">
                {goals.filter(g => g.completed).length}/{goals.length}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Your Learning Progress</h2>
                <p className="text-gray-600 text-sm">
                  {goals.filter(g => !g.completed).length} active goals
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowGoalForm(true)}
              className="bg-[#FF637A] hover:bg-[#e55a6e] text-white px-6 py-3 rounded-lg shadow transition flex items-center gap-2"
            >
              <span>+ New Goal</span>
            </button>
          </div>

          {/* Current Goals */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Active Goals</h3>
              <span className="text-sm text-gray-500">
                {goals.filter(g => !g.completed).length} goals
              </span>
            </div>
            
            {goals.filter(g => !g.completed).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.filter(g => !g.completed).map((goal, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-[#FF637A]/10 text-[#FF637A]">
                          {goal.track}
                        </span>
                        <h4 className="font-semibold text-gray-900">Unit {goal.unit} Preparation</h4>
                      </div>
                      <button
                        onClick={() => toggleGoalCompletion(index)}
                        className="text-green-500 hover:text-green-700"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div>
                        <p>Target: {formatDate(goal.endDate)}</p>
                        <p className={getDaysRemaining(goal.endDate).includes("passed") ? "text-red-500" : "text-gray-500"}>
                          {getDaysRemaining(goal.endDate)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeGoal(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                    
                    <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#FF637A] h-2 rounded-full" 
                        style={{ width: `${(goal.unit / 10) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-500">No active goals yet</p>
                <button
                  onClick={() => setShowGoalForm(true)}
                  className="text-[#FF637A] hover:underline mt-2"
                >
                  Create your first goal
                </button>
              </div>
            )}
          </div>

          {/* Completed Goals */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Completed Goals</h3>
              <span className="text-sm text-gray-500">
                {goals.filter(g => g.completed).length} goals
              </span>
            </div>
            
            {goals.filter(g => g.completed).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {goals.filter(g => g.completed).map((goal, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 opacity-80">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 bg-green-100 text-green-800">
                          Completed
                        </span>
                        <h4 className="font-semibold text-gray-900">{goal.track} - Unit {goal.unit}</h4>
                      </div>
                      <button
                        onClick={() => toggleGoalCompletion(index)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <CheckCircleIcon className="w-5 h-5" />
                      </button>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <p>Finished on {formatDate(goal.endDate)}</p>
                      <button
                        onClick={() => removeGoal(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center">
                <p className="text-gray-500">No completed goals yet</p>
              </div>
            )}
          </div>

          {/* Goal Form Modal */}
          {showGoalForm && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">New Learning Goal</h3>
                  <button
                    onClick={() => setShowGoalForm(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Track</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                      value={selectedTrack}
                      onChange={(e) => setSelectedTrack(e.target.value)}
                      required
                    >
                      <option value="">Select a track</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Investment Banking">Investment Banking</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Unit (1-10)</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Completion Date</label>
                    <input
                      type="date"
                      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      onClick={addGoal}
                      disabled={!selectedTrack || !endDate}
                      className="w-full bg-[#FF637A] hover:bg-[#e55a6e] text-white py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Save Goal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}