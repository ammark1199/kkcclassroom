"use client";
import { useState } from "react";
import { 
  ArrowLeftIcon, 
  FilmIcon,
  Bars3Icon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";
import Navbar from "../../../../_components/Navbar";
import Sidebar from "../../../../_components/Sidebar";

export default function VideoPage({ params }) {
  const { unitId, videoId } = params;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const closeSidebar = () => {
    if (mobileOpen) setMobileOpen(false);
  };

  // Mock data
  const videoData = {
    title: "Why did I create it? - VIDEO 1",
    youtubeId: "zv0rfq9zU2I",
    description: "In this video, I explain the reasons behind creating KKC Classroom and my vision for this platform.",
    duration: "5 min",
    uploadDate: "Uploaded 2 weeks ago"
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

          {/* Video content */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
            <div className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-[#FF637A]/10 rounded-lg">
                  <FilmIcon className="w-6 h-6 text-[#FF637A]" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{videoData.title}</h1>
                  <div className="flex items-center text-gray-500 text-sm mt-2">
                    <span>{videoData.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{videoData.uploadDate}</span>
                  </div>
                </div>
              </div>
              
              {/* Video player */}
              <div className="aspect-w-16 aspect-h-9 mb-8 rounded-xl overflow-hidden shadow-sm">
                <iframe 
                  className="w-full h-96"
                  src={`https://www.youtube.com/embed/${videoData.youtubeId}`}
                  title={videoData.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              <p className="text-gray-700 mb-8">{videoData.description}</p>
              
              {/* Practice section */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Check Your Understanding</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50/50 p-5 rounded-xl border border-blue-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Points</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>The platform was created to bridge the gap between theory and practice</li>
                      <li>Focuses on practical consulting skills</li>
                      <li>Based on 10+ years of industry experience</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50/50 p-5 rounded-xl border border-green-100">
                    <h3 className="font-semibold text-gray-900 mb-3">Discussion Question</h3>
                    <p className="text-gray-700 mb-3">What do you hope to gain from this course?</p>
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