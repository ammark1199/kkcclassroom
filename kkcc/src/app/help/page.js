"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { 
  Bars3Icon,
  MagnifyingGlassIcon,
  LifebuoyIcon,
  EnvelopeIcon,
  UsersIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClockIcon,
  CalendarIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

export default function HelpSupport() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const supportCards = [
    {
      icon: EnvelopeIcon,
      title: "Contact Support",
      description: "Reach out directly to our team for personalized assistance.",
      link: "/support/contact"
    },
    {
      icon: UsersIcon,
      title: "Community Forum",
      description: "Join discussions and learn from other candidates and professionals.",
      link: "/community"
    },
    {
      icon: BookOpenIcon,
      title: "Knowledge Base",
      description: "Browse guides, interview tips, resume templates, and FAQs.",
      link: "/knowledge-base"
    },
    {
      icon: UserGroupIcon,
      title: "1:1 Coaching",
      description: "Schedule a session with an ex-consultant or banker for strategy, resume, or interview prep.",
      link: "/coaching"
    }
  ];

  const resourceSections = [
    {
      title: "Top Articles",
      icon: BookOpenIcon,
      items: [
        "How to break into consulting with a non-target degree",
        "Investment banking resume checklist",
        "Why fit answers that actually impress"
      ]
    },
    {
      title: "Interview Prep Hub",
      icon: ClockIcon,
      items: [
        "Market sizing drills",
        "Behavioral frameworks",
        "Live case study examples"
      ]
    },
    {
      title: "Quick Links",
      icon: CalendarIcon,
      items: [
        "Request a coaching session",
        "Browse upcoming webinars",
        "Check application deadlines"
      ]
    }
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                <LifebuoyIcon className="w-8 h-8 text-[#FF637A]" />
                Help & Support
              </h1>
              <p className="text-gray-600 mt-1">
                How can we assist you today?
              </p>
            </div>
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          {/* Search Section */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-12">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search help topics, FAQs, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
              />
            </div>
          </div>

          {/* Quick Help Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {supportCards.map((card, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 hover:border-[#FF637A]/30 cursor-pointer group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#FF637A]/10 flex items-center justify-center text-[#FF637A]">
                      <card.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">{card.description}</p>
                  <div className="flex items-center text-[#FF637A] group-hover:underline">
                    <span className="text-sm font-medium">Learn more</span>
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resource Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {resourceSections.map((section, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#FF637A]"
              >
                <div className="flex items-center gap-2 mb-4">
                  <section.icon className="w-5 h-5 text-[#FF637A]" />
                  <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 text-[#FF637A] mr-2 mt-0.5">
                        <svg viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700 hover:text-[#FF637A] cursor-pointer hover:underline">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-[#FF637A] to-[#FF8E53] rounded-xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-2">Still need help?</h3>
            <p className="mb-6 max-w-2xl mx-auto">
              Our support team is ready to assist you with any questions or issues you might have.
            </p>
            <button className="bg-white text-[#FF637A] hover:bg-gray-100 px-8 py-3 rounded-lg shadow-md text-lg font-medium transition">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}