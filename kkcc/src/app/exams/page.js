"use client";
import { useState } from "react";
import { 
  ClockIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  ChartBarIcon,
  AcademicCapIcon,
  BanknotesIcon,
  BriefcaseIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { Bars3Icon } from '@heroicons/react/24/outline';


const examData = {
  consulting: [
    {
      id: "c1",
      title: "Unit 2 Quiz",
      type: "unit",
      unit: 2,
      lesson: null,
      questions: 10,
      duration: 20,
      status: "available",
      lastAttempt: null,
      bestScore: null,
      attemptsLeft: 3
    },
    {
      id: "c2",
      title: "Lesson 2 Quiz",
      type: "lesson",
      unit: 2,
      lesson: 2,
      questions: 5,
      duration: 10,
      status: "completed",
      lastAttempt: "85%",
      bestScore: "85%",
      attemptsLeft: 0
    },
    {
      id: "c3",
      title: "Lesson 3 Quiz",
      type: "lesson",
      unit: 2,
      lesson: 3,
      questions: 5,
      duration: 10,
      status: "pending",
      lastAttempt: null,
      bestScore: null,
      attemptsLeft: 2
    }
  ],
  investmentBanking: [
    {
      id: "ib1",
      title: "Unit 2 Quiz",
      type: "unit",
      unit: 2,
      lesson: null,
      questions: 10,
      duration: 20,
      status: "available",
      lastAttempt: null,
      bestScore: null,
      attemptsLeft: 3
    },
    {
      id: "ib2",
      title: "Lesson 2 Quiz",
      type: "lesson",
      unit: 2,
      lesson: 2,
      questions: 5,
      duration: 10,
      status: "completed",
      lastAttempt: "92%",
      bestScore: "92%",
      attemptsLeft: 0
    },
    {
      id: "ib3",
      title: "Lesson 3 Quiz",
      type: "lesson",
      unit: 2,
      lesson: 3,
      questions: 5,
      duration: 10,
      status: "pending",
      lastAttempt: null,
      bestScore: null,
      attemptsLeft: 2
    }
  ]
};

export default function ExamsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("consulting");
  const [statusFilter, setStatusFilter] = useState("all");

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const filteredExams = examData[activeTab].filter(exam => {
    if (statusFilter === "all") return true;
    return exam.status === statusFilter;
  });

  const statusCounts = {
    all: examData[activeTab].length,
    available: examData[activeTab].filter(e => e.status === "available").length,
    pending: examData[activeTab].filter(e => e.status === "pending").length,
    completed: examData[activeTab].filter(e => e.status === "completed").length
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 antialiased">
      <Sidebar 
        expanded={expanded} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />
      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Exams & Quizzes</h1>
              <p className="text-gray-600 mt-2">
                Test your knowledge and track your progress through assessments
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <button 
                className="lg:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Course Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("consulting")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === "consulting" ? "border-[#FF637A] text-[#FF637A]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <BriefcaseIcon className="w-5 h-5 mr-2" />
                Consulting Track
              </button>
              <button
                onClick={() => setActiveTab("investmentBanking")}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === "investmentBanking" ? "border-[#FF637A] text-[#FF637A]" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"}`}
              >
                <BanknotesIcon className="w-5 h-5 mr-2" />
                Investment Banking Track
              </button>
            </nav>
          </div>

          {/* Status Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              onClick={() => setStatusFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${statusFilter === "all" ? "bg-[#FF637A] text-white" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
            >
              <DocumentTextIcon className="w-4 h-4 mr-2" />
              All ({statusCounts.all})
            </button>
            <button
              onClick={() => setStatusFilter("available")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${statusFilter === "available" ? "bg-green-100 text-green-800" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
            >
              <ArrowPathIcon className="w-4 h-4 mr-2" />
              Available ({statusCounts.available})
            </button>
            <button
              onClick={() => setStatusFilter("pending")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${statusFilter === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
            >
              <ClockIcon className="w-4 h-4 mr-2" />
              Pending ({statusCounts.pending})
            </button>
            <button
              onClick={() => setStatusFilter("completed")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${statusFilter === "completed" ? "bg-blue-100 text-blue-800" : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"}`}
            >
              <CheckCircleIcon className="w-4 h-4 mr-2" />
              Completed ({statusCounts.completed})
            </button>
          </div>

          {/* Exams Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredExams.length > 0 ? (
              filteredExams.map((exam) => (
                <div 
                  key={exam.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="flex items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            exam.type === "unit" 
                              ? "bg-purple-100 text-purple-800" 
                              : "bg-blue-100 text-blue-800"
                          }`}>
                            {exam.type === "unit" ? "Unit Test" : "Lesson Quiz"}
                          </span>
                          {exam.status === "completed" && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Completed
                            </span>
                          )}
                        </div>
                        <h3 className="mt-2 text-lg font-bold text-gray-900">
                          {exam.title}
                        </h3>
                        {exam.lesson && (
                          <p className="text-sm text-gray-500">
                            Unit {exam.unit} • Lesson {exam.lesson}
                          </p>
                        )}
                        {!exam.lesson && (
                          <p className="text-sm text-gray-500">
                            Unit {exam.unit} Comprehensive Test
                          </p>
                        )}
                      </div>
                      <div className="flex-shrink-0 p-2 bg-[#FF637A]/10 rounded-lg">
                        {exam.type === "unit" ? (
                          <AcademicCapIcon className="w-6 h-6 text-[#FF637A]" />
                        ) : (
                          <DocumentTextIcon className="w-6 h-6 text-[#FF637A]" />
                        )}
                      </div>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-2 text-gray-400" />
                        {exam.duration} mins
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DocumentTextIcon className="w-4 h-4 mr-2 text-gray-400" />
                        {exam.questions} questions
                      </div>
                    </div>

                    {exam.status === "completed" && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Best Score</span>
                          <span className="font-medium text-gray-900">{exam.bestScore}</span>
                        </div>
                        <div className="flex items-center justify-between text-sm mt-1">
                          <span className="text-gray-500">Last Attempt</span>
                          <span className="font-medium text-gray-900">{exam.lastAttempt}</span>
                        </div>
                      </div>
                    )}

                    {exam.status === "pending" && (
                      <div className="mt-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Attempts Left</span>
                          <span className="font-medium text-gray-900">{exam.attemptsLeft}</span>
                        </div>
                      </div>
                    )}

                    <div className="mt-6">
                      <Link
                        href={`/exams/take/${exam.id}`}
                        className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium ${
                          exam.status === "available" 
                            ? "bg-[#FF637A] text-white hover:bg-[#e04d65]" 
                            : exam.status === "pending"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {exam.status === "available" && "Start Exam"}
                        {exam.status === "pending" && "Continue Later"}
                        {exam.status === "completed" && "View Results"}
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No exams found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  There are currently no {statusFilter} exams for this track.
                </p>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-green-100 text-green-600 mr-4">
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Completed</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {examData[activeTab].filter(e => e.status === "completed").length}
                    <span className="text-sm font-normal text-gray-500">/{examData[activeTab].length}</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-blue-100 text-blue-600 mr-4">
                  <ChartBarIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Average Score</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {activeTab === "consulting" ? "87%" : "89%"}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="p-3 rounded-lg bg-purple-100 text-purple-600 mr-4">
                  <AcademicCapIcon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Certification Progress</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {activeTab === "consulting" ? "65%" : "58%"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}