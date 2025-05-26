"use client";
import { useState } from "react";
import { 
  BookOpenIcon,
  LockClosedIcon,
  CheckCircleIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Sidebar from "../_components/Sidebar";
import Navbar from "../_components/Navbar";
import Link from "next/link";

// Mock data for courses
const courses = {
  consulting: {
    title: "Consulting Mastery",
    description: "Master the art of consulting with our comprehensive course",
    units: Array.from({ length: 10 }, (_, i) => ({
      id: `consulting-${i+1}`,
      title: `Unit ${i+1}: ${[
        "Intro to Consulting",
        "Case Interview Fundamentals",
        "Market Sizing Techniques",
        "Profitability Frameworks",
        "Business Situation Analysis",
        "Advanced Case Studies",
        "Client Communication",
        "Consulting Math",
        "Final Case Practice",
        "Career Strategy"
      ][i]}`,
      description: [
        "Learn the fundamentals of consulting and case interviews",
        "Master the basic frameworks for case interviews",
        "Develop techniques for market sizing questions",
        "Understand profitability and business frameworks",
        "Analyze complex business situations",
        "Practice advanced case studies",
        "Improve client communication skills",
        "Master consulting math techniques",
        "Final case interview preparation",
        "Develop your consulting career strategy"
      ][i],
      image: `/consulting-${(i % 5) + 1}.jpg`, // Repeating 5 images
      totalLessons: [8, 10, 7, 9, 6, 12, 5, 8, 10, 4][i],
      completedLessons: [5, 3, 0, 0, 0, 0, 0, 0, 0, 0][i],
      locked: i > 2 && i !== 0 // Lock units after unit 3 (except unit 1)
    }))
  },
  investmentBanking: {
    title: "Investment Banking",
    description: "Complete guide to breaking into investment banking",
    units: Array.from({ length: 10 }, (_, i) => ({
      id: `ib-${i+1}`,
      title: `Unit ${i+1}: ${[
        "IB Industry Overview",
        "Financial Statements",
        "Valuation Methods",
        "DCF Modeling",
        "M&A Process",
        "LBO Modeling",
        "Technical Interview Prep",
        "Excel for Banking",
        "Networking Strategies",
        "Resume & Interviews"
      ][i]}`,
      description: [
        "Understand the investment banking industry",
        "Master financial statement analysis",
        "Learn key valuation methodologies",
        "Build DCF models from scratch",
        "Understand the M&A process",
        "Master LBO modeling techniques",
        "Prepare for technical interviews",
        "Excel skills for banking",
        "Networking for banking roles",
        "Resume and interview preparation"
      ][i],
      image: `/ib-${(i % 5) + 1}.jpg`, // Repeating 5 images
      totalLessons: [6, 12, 9, 11, 8, 10, 7, 8, 5, 6][i],
      completedLessons: [4, 2, 0, 0, 0, 0, 0, 0, 0, 0][i],
      locked: i > 1 && i !== 0 // Lock units after unit 2 (except unit 1)
    }))
  }
};

const UnitCard = ({ unit }) => {
  const progress = Math.round((unit.completedLessons / unit.totalLessons) * 100);
  const isStarted = unit.completedLessons > 0;
  const isCompleted = progress === 100;

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
        unit.locked ? "border-gray-200 opacity-70" : "border-transparent hover:border-[#FF637A]/30"
      } transition-all flex flex-col h-full`}
    >
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        <img 
          src={unit.image} 
          alt={unit.title} 
          className="w-full h-full object-cover"
        />
        {unit.locked && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <LockClosedIcon className="w-8 h-8 text-white" />
          </div>
        )}
        {isCompleted && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
            <CheckCircleIcon className="w-3 h-3 mr-1" />
            Completed
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-black mb-1 line-clamp-2">{unit.title}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{unit.description}</p>
        
        <div className="mb-3 mt-auto">
          <div className="flex justify-between text-xs mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-[#FF637A]">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#FF637A] h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        
        <Link
          href={unit.locked ? "#" : `/courses/${unit.id}`}
          className={`block text-center py-2 px-4 rounded-lg font-medium mt-2 ${
            unit.locked
              ? "bg-gray-200 text-gray-500 cursor-not-allowed"
              : isStarted
                ? "bg-[#FF637A] text-white hover:bg-[#e04d65]"
                : "bg-[#F1EFE7] text-[#FF637A] hover:bg-[#FF637A]/10"
          } transition`}
        >
          {unit.locked ? "Locked" : isStarted ? "Continue" : "Start"} Section
        </Link>
      </div>
    </motion.div>
  );
};

export default function CoursesPage() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("consulting");
  const currentCourse = courses[activeTab];

  // Group units into rows of 3
  const unitRows = [];
  for (let i = 0; i < currentCourse.units.length; i += 3) {
    unitRows.push(currentCourse.units.slice(i, i + 3));
  }

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-sans text-gray-900">
      <Sidebar 
        expanded={expanded} 
        toggleSidebar={toggleSidebar}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <Navbar 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-black mb-1">Course Library</h1>
              <p className="text-gray-600">{currentCourse.description}</p>
            </div>
            
            <div className="mt-4 md:mt-0 bg-white rounded-lg p-1 border border-gray-200">
              <div className="flex">
                {Object.keys(courses).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium rounded-md transition ${
                      activeTab === tab
                        ? "bg-[#FF637A] text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {courses[tab].title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h2 className="text-xl font-bold text-black mb-4">Unit Selection</h2>
            
            {/* Render units in rows of 3 */}
            <div className="space-y-6">
              {unitRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {row.map((unit) => (
                    <UnitCard key={unit.id} unit={unit} />
                  ))}
                  {/* Fill empty slots in last row if needed */}
                  {row.length < 3 && rowIndex === unitRows.length - 1 && (
                    Array.from({ length: 3 - row.length }).map((_, i) => (
                      <div key={`empty-${i}`} className="hidden lg:block" />
                    ))
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}