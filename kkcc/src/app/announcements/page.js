"use client";

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { BellIcon, CalendarIcon, ChevronDownIcon, MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function AnnouncementsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const announcements = [
    {
      id: 1,
      title: "New Case Interview Workshop",
      content: "Join us this Friday for an exclusive case interview workshop with former McKinsey consultants. Learn the frameworks that helped them land offers.",
      date: "2024-06-15",
      category: "workshop",
      pinned: true
    },
    {
      id: 2,
      title: "System Maintenance Scheduled",
      content: "The KKC platform will be undergoing maintenance this Sunday from 2-4 AM EST. Please save your work before this time.",
      date: "2024-06-10",
      category: "system",
      pinned: false
    },
    {
      id: 3,
      title: "Investment Banking Networking Event",
      content: "We're hosting a virtual networking event with Goldman Sachs alumni next Wednesday. Perfect opportunity to make connections!",
      date: "2024-06-18",
      category: "event",
      pinned: true
    },
    {
      id: 4,
      title: "New Course Materials Available",
      content: "The financial modeling course has been updated with new LBO modeling exercises and video walkthroughs.",
      date: "2024-06-05",
      category: "update",
      pinned: false
    },
  ];

  const filteredAnnouncements = announcements
    .filter(announcement => 
      (activeFilter === "all" || announcement.category === activeFilter) &&
      (announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
       announcement.content.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
              <p className="text-gray-600 mt-1">
                Stay updated with the latest news and events from KKC
              </p>
            </div>
            <button 
              className="lg:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>

          {/* Filters and Search */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 mb-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search announcements..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent text-sm"
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent text-sm"
                    value={activeFilter}
                    onChange={(e) => setActiveFilter(e.target.value)}
                  >
                    <option value="all">All Announcements</option>
                    <option value="workshop">Workshops</option>
                    <option value="event">Events</option>
                    <option value="update">Updates</option>
                    <option value="system">System</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements List */}
          <div className="space-y-4">
            {filteredAnnouncements.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center">
                <BellIcon className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No announcements found</h3>
                <p className="text-gray-500 mt-1">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              filteredAnnouncements.map((announcement) => (
                <div
                  key={announcement.id}
                  className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition border-l-4 ${announcement.pinned ? 'border-[#FF637A]' : 'border-transparent'} border-gray-200`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
                      {announcement.pinned && (
                        <span className="bg-[#FF637A]/10 text-[#FF637A] text-xs px-2 py-1 rounded-full">
                          Pinned
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <CalendarIcon className="w-4 h-4 mr-1" />
                      {formatDate(announcement.date)}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{announcement.content}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-medium text-white bg-[#FF637A] px-3 py-1 rounded-full">
                      {announcement.category.charAt(0).toUpperCase() + announcement.category.slice(1)}
                    </span>
                    <button className="text-[#FF637A] hover:underline text-sm font-medium">
                      View Details
                    </button>
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