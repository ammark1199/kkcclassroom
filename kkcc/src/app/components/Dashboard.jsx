"use client";
import { useState, useEffect } from "react";

export default function Dashboard({ selectedTab }) {
  const [courses, setCourses] = useState([]);
  const [resources, setResources] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [recentlyAccessed, setRecentlyAccessed] = useState([]);
  const [moreQuestions, setMoreQuestions] = useState([]);

  useEffect(() => {
    if (selectedTab === "Consulting") {
      setCourses([
        { name: "Strategy Consulting", progress: 40 },
        { name: "Operations Consulting", progress: 60 },
        { name: "Human Capital Consulting", progress: 30 },
      ]);

      setResources([
        { name: "Case Interview Guide", link: "/resources/case-guide.pdf" },
        { name: "Consulting Frameworks", link: "/resources/frameworks.pdf" },
        { name: "Market Analysis Template", link: "/resources/market-template.pdf" },
      ]);

      setQuestions([
        "What is the 80/20 Rule?",
        "How do you structure a market-sizing question?",
        "What are the main types of consulting firms?"
      ]);

      setRecentlyAccessed([
        "McKinsey 7S Framework",
        "Bain Cost Transformation",
        "BCG Matrix Analysis"
      ]);

      setMoreQuestions([
        "How do you approach a profitability case?",
        "What is MECE principle?",
        "How do you analyze market entry?"
      ]);

    } else {
      setCourses([
        { name: "Financial Modeling", progress: 50 },
        { name: "Valuation Techniques", progress: 30 },
        { name: "M&A Analysis", progress: 75 },
      ]);

      setResources([
        { name: "DCF Model Guide", link: "/resources/dcf-model.pdf" },
        { name: "Comparable Company Analysis", link: "/resources/comps-analysis.pdf" },
        { name: "LBO Model Template", link: "/resources/lbo-template.pdf" },
      ]);

      setQuestions([
        "What are the key steps in a DCF?",
        "How do you calculate WACC?",
        "What is a control premium?"
      ]);

      setRecentlyAccessed([
        "Cost of Capital",
        "Advanced LBO Modeling",
        "Enterprise Value vs. Equity Value"
      ]);

      setMoreQuestions([
        "What is a Discount Rate?",
        "How do you calculate Terminal Value?",
        "What is a Leveraged Buyout?"
      ]);
    }
  }, [selectedTab]);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="text-4xl font-bold mb-8">Welcome Back! ({selectedTab})</div>

      <div className="grid grid-cols-3 gap-8">
        {/* My Courses */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">My Courses</h2>
          {courses.map((course, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <p className="text-gray-800">{course.name}</p>
                <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600">
                  Resume
                </button>
              </div>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div
                  className="bg-blue-600 h-2 rounded"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
            + Add Course
          </button>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Resources</h2>
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="block text-blue-500 hover:underline mb-2"
            >
              {resource.name}
            </a>
          ))}
        </div>

        {/* Questions */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Questions?</h2>
          <ul className="list-disc pl-5 text-gray-800 space-y-2">
            {questions.map((question, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500 hover:underline">
                  {question}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-2 gap-8 mt-8">
        {/* Recently Accessed */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Recently Accessed</h2>
          <ul className="list-disc pl-5 text-gray-800">
            {recentlyAccessed.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500 hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* More Questions */}
        <div className="bg-white rounded-lg p-5 shadow-md">
          <h2 className="text-2xl font-bold mb-4">More Questions?</h2>
          <ul className="list-disc pl-5 text-gray-800">
            {moreQuestions.map((question, index) => (
              <li key={index}>
                <a href="#" className="text-blue-500 hover:underline">
                  {question}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
