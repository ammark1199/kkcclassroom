"use client";

import { useState } from "react";

export default function QandASection() {
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
    <div className="min-h-screen bg-gradient-to-br from-[#F1EFE7] to-white text-[#000] px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold underline decoration-[#FF637A] underline-offset-8">
            Q & A Section
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mt-2">
            Ask questions, share knowledge, and browse verified answers from KKC Classroom experts.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center space-x-6 mb-6">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              activeTab === "all"
                ? "bg-[#FF637A] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            All Questions
          </button>
          <button
            onClick={() => setActiveTab("my")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition ${
              activeTab === "my"
                ? "bg-[#FF637A] text-white"
                : "bg-white text-black border border-gray-300"
            }`}
          >
            My Questions
          </button>
        </div>

        {/* Search Input */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search questions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-3xl border border-gray-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A]"
          />
        </div>

        {/* Ask Form */}
        <div className="max-w-3xl mx-auto mb-10 bg-white p-6 rounded-xl shadow">
          <textarea
            placeholder="Ask a new question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 px-4 py-2 rounded-lg resize-none"
          />
          <div className="flex justify-between items-center mt-4">
            <select
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option>Consulting</option>
              <option>Investment Banking</option>
              <option>Other</option>
            </select>
            <button
              onClick={handleAsk}
              className="bg-[#FF637A] text-white px-6 py-2 rounded-xl shadow hover:bg-pink-600 transition"
            >
              Ask Question
            </button>
          </div>
        </div>

        {/* Question Feed */}
        <div className="space-y-6">
          {filteredQuestions.length === 0 ? (
            <p className="text-center text-gray-500">No questions found.</p>
          ) : (
            filteredQuestions.map((q) => (
              <div
                key={q.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition relative"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img src={q.avatar} alt={q.user} className="w-10 h-10 rounded-full border" />
                  <div>
                    <div className="font-semibold text-[#FF637A]">{q.user}</div>
                    <div className="text-xs text-gray-500">{q.time}</div>
                  </div>
                </div>
                <p className="text-gray-800 font-medium mb-2">{q.question}</p>
                <div className="text-xs text-white bg-[#FF637A] inline-block px-3 py-1 rounded-full mb-2">
                  {q.tag}
                </div>
                {q.answer && (
                  <details className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                    <summary className="cursor-pointer font-semibold text-blue-700 flex items-center gap-2">
                      <span>KKC Classroom</span>
                      {q.verified && <span className="text-blue-500 text-lg font-bold">✔</span>}
                    </summary>
                    <p className="mt-2 text-sm text-gray-700">{q.answer}</p>
                  </details>
                )}
                <div className="flex justify-end gap-4 mt-4">
                  <button
                    onClick={() => toggleUpvote(q.id)}
                    className={`px-4 py-1 rounded-full border text-sm ${
                      q.upvoted ? "bg-green-100 text-green-700 border-green-300" : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    👍 Upvote
                  </button>
                  {q.askedByMe && (
                    <button
                      onClick={() => deleteQuestion(q.id)}
                      className="text-red-500 text-sm hover:underline"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
