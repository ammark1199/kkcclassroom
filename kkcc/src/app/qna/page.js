"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function QandASection() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("all");
  const [questions, setQuestions] = useState([
    {
      id: 1,
      user: "Alex",
      avatar: "https://i.pravatar.cc/150?img=3",
      time: "2h ago",
      question: "How do I prepare for the McKinsey problem-solving test?",
      answer: "Start with drills from KKC Casebank and practice under timed conditions.",
      verified: true,
      askedByMe: false,
      tag: "Consulting",
      upvoted: false,
    },
    {
      id: 2,
      user: "You",
      avatar: "https://i.pravatar.cc/150?img=5",
      time: "1d ago",
      question: "What resources should I use to study for financial modeling?",
      answer: "Check out the IB Prep section in your dashboard and download the Excel toolkit.",
      verified: true,
      askedByMe: true,
      tag: "Investment Banking",
      upvoted: false,
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");
  const [newTag, setNewTag] = useState("Consulting");
  const [searchTerm, setSearchTerm] = useState("");

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const filteredQuestions = questions.filter((q) =>
    activeTab === "my"
      ? q.askedByMe && q.question.toLowerCase().includes(searchTerm.toLowerCase())
      : q.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAsk = () => {
    if (newQuestion.trim()) {
      const newQ = {
        id: Date.now(),
        user: "You",
        avatar: "https://i.pravatar.cc/150?img=5",
        time: "Just now",
        question: newQuestion,
        answer: "Coming soon from KKC Classroom",
        verified: true,
        askedByMe: true,
        tag: newTag,
        upvoted: false,
      };
      setQuestions([newQ, ...questions]);
      setNewQuestion("");
      setNewTag("Consulting");
    }
  };

  const toggleUpvote = (id) => {
    setQuestions(
      questions.map((q) =>
        q.id === id ? { ...q, upvoted: !q.upvoted } : q
      )
    );
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
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
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              Q&A Community
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto mt-2">
              Ask questions and get verified answers from KKC experts and peers
            </p>
          </div>

          {/* Tabs and Search */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  activeTab === "all"
                    ? "bg-[#FF637A] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                All Questions
              </button>
              <button
                onClick={() => setActiveTab("my")}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
                  activeTab === "my"
                    ? "bg-[#FF637A] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                My Questions
              </button>
            </div>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent text-sm"
              />
            </div>
          </div>

          {/* Ask Form - Only in 'My Questions' tab */}
          {activeTab === "my" && (
            <div className="max-w-3xl mx-auto mb-10 bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Ask a new question</h3>
              <textarea
                placeholder="Type your question here..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                rows={3}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg resize-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
              />
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-4">
                <select
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                >
                  <option>Consulting</option>
                  <option>Investment Banking</option>
                  <option>Other</option>
                </select>
                <button
                  onClick={handleAsk}
                  disabled={!newQuestion.trim()}
                  className="bg-[#FF637A] text-white px-6 py-2 rounded-lg shadow hover:bg-[#e55a6e] transition disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                >
                  Post Question
                </button>
              </div>
            </div>
          )}

          {/* Question Feed */}
          <div className="space-y-6">
            {filteredQuestions.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm border border-gray-200">
                <p className="text-gray-500">No questions found.</p>
                {activeTab === "my" && (
                  <p className="text-sm text-gray-400 mt-2">Be the first to ask a question!</p>
                )}
              </div>
            ) : (
              filteredQuestions.map((q) => (
                <div
                  key={q.id}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={q.avatar} 
                        alt={q.user} 
                        className="w-10 h-10 rounded-full border-2 border-white shadow" 
                      />
                      <div>
                        <div className="font-medium text-gray-900 flex items-center gap-2">
                          {q.user}
                          {q.verified && (
                            <span className="text-blue-500 text-xs bg-blue-50 px-2 py-0.5 rounded-full">
                              Verified
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{q.time}</div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-white bg-[#FF637A] px-3 py-1 rounded-full">
                      {q.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{q.question}</h3>
                  
                  {q.answer && (
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#FF637A] mb-4">
                      <div className="font-medium text-[#FF637A] flex items-center gap-2 mb-2">
                        KKC Classroom Answer
                        {q.verified && <span className="text-green-500">✓</span>}
                      </div>
                      <p className="text-gray-700">{q.answer}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => toggleUpvote(q.id)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
                        q.upvoted
                          ? "bg-green-50 text-green-700 border border-green-200"
                          : "bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100"
                      }`}
                    >
                      <span>👍</span>
                      <span>Upvote</span>
                    </button>
                    
                    {q.askedByMe && (
                      <button
                        onClick={() => deleteQuestion(q.id)}
                        className="text-red-500 text-sm hover:text-red-700 flex items-center gap-1"
                      >
                        <span>Delete</span>
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}