"use client";
import { useState } from "react";
import { 
  ArrowLeftIcon, 
  BookOpenIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "../../../../_components/Navbar";
import Sidebar from "../../../../_components/Sidebar";

export default function DocPage({ params }) {
  const { unitId, docId } = params;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const closeSidebar = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  // Mock data
  const docData = {
    title: "Personal Intro of myself",
    content: `
      <h2 class="text-xl font-bold text-black mb-4">About Me</h2>
      <p class="mb-4">Hello and welcome to KKC Classroom! I'm the founder of this platform. With over 10 years of experience in consulting, I've worked with numerous Fortune 500 companies and startups alike.</p>
      
      <h2 class="text-xl font-bold text-black mb-4">My Background</h2>
      <p class="mb-4">I hold an MBA and specialized in strategic management. My journey in consulting began where I quickly rose through the ranks to become a senior consultant.</p>
      
      <h2 class="text-xl font-bold text-black mb-4">Why I Teach</h2>
      <p class="mb-4">After years in the industry, I noticed a gap between academic knowledge and practical consulting skills. This course is my way of bridging that gap.</p>
    `,
    duration: "3 min read",
    lastUpdated: "Last updated 1 week ago"
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
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Header with back button */}
          <div className="flex items-center justify-between mb-8">
            <Link 
              href={`/courses/${unitId}`}
              className="flex items-center text-[#FF637A] hover:text-[#e04d65] transition-colors"
              onClick={closeSidebar}
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              <span className="font-medium">Back to Unit</span>
            </Link>
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Document content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#FF637A]/10 rounded-lg">
                  <BookOpenIcon className="w-6 h-6 text-[#FF637A]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{docData.title}</h1>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span>{docData.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{docData.lastUpdated}</span>
                  </div>
                </div>
              </div>
              
              {/* Document content with HTML rendering */}
              <div 
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: docData.content }}
              />
              
              {/* Practice section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Check Your Understanding</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Points</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>The instructor has 10+ years consulting experience</li>
                      <li>Focuses on bridging theory-practice gap</li>
                      <li>Worked with Fortune 500 companies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50/50 p-5 rounded-xl border border-green-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Discussion Question</h3>
                    <p className="text-gray-700 mb-3">What aspect of consulting are you most interested in learning about?</p>
                    <textarea 
                      className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#FF637A] focus:border-transparent transition-all"
                      rows={4}
                      placeholder="Share your thoughts..."
                    />
                    <button className="mt-3 px-4 py-2 bg-[#FF637A] text-white rounded-lg hover:bg-[#e04d65] transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}