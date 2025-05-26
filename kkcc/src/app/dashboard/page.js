"use client";
import { useState } from "react";
import { 
  HomeIcon,
  BookOpenIcon,
  BellIcon,
  ClipboardDocumentIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  CogIcon,
  CreditCardIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  Bars3Icon,
  XMarkIcon,
  LifebuoyIcon,
  BookmarkIcon,
  PlayIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  ClockIcon,
  ChartBarIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// Mock data
const recentLessons = [
  {
    id: 1,
    title: "Consulting explained - VIDEO 5",
    course: "UNIT 1: Intro to KKC Classroom",
    progress: 85,
    type: "video",
    thumbnail: "/nice2.jpg",
    duration: "8 min",
    lastAccessed: "2 hours ago"
  },
  {
    id: 2,
    title: "Cold Outreach 101",
    course: "UNIT 3: Networking Mastery",
    progress: 40,
    type: "video",
    thumbnail: "/nice3.jpg",
    duration: "7 min",
    lastAccessed: "1 day ago"
  },
  {
    id: 3,
    title: "LinkedIn Profile Guide",
    course: "UNIT 3: Networking Mastery",
    progress: 25,
    type: "doc",
    duration: "8 min",
    lastAccessed: "3 days ago"
  }
];

const announcements = []; // No current announcements

const quickLinks = [
  { icon: BookOpenIcon, title: "Course Materials", href: "/courses", description: "Access all your course materials" },
  { icon: ClipboardDocumentIcon, title: "Exams", href: "/exams", description: "View upcoming exams" },
  { icon: BellIcon, title: "Announcements", href: "/announcements", description: "See all announcements" },
  { icon: QuestionMarkCircleIcon, title: "Q&A Forum", href: "/qna", description: "Get help from community" }
];

const SidebarItem = ({ icon: Icon, label, href, expanded }) => {
  return (
    <Link
      href={href}
      className={`flex items-center p-3 rounded-lg transition-colors hover:bg-[#F1EFE7] text-gray-700 hover:text-black`}
    >
      <Icon className="w-5 h-5" />
      {expanded && <span className="ml-3">{label}</span>}
    </Link>
  );
};

const Sidebar = ({ expanded, toggleSidebar, mobileOpen, setMobileOpen }) => {
  const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpenIcon, label: "Courses", href: "/courses" },
    { icon: BellIcon, label: "Announcements", href: "/announcements" },
    { icon: ClipboardDocumentIcon, label: "Exams", href: "/exams" },
    { icon: QuestionMarkCircleIcon, label: "Q&A", href: "/qna" },
    { icon: BookmarkIcon, label: "Resources", href: "/resources" },
    { icon: LifebuoyIcon, label: "Help & Support", href: "/help" },
  ];

  const accountItems = [
    { icon: UserCircleIcon, label: "Profile", href: "/profile" },
    { icon: CogIcon, label: "Settings", href: "/settings" },
    { icon: CreditCardIcon, label: "Subscription", href: "/payment" },
  ];

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-30 transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full p-4">
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] ml-auto mb-4"
          >
            {expanded ? (
              <ChevronDoubleLeftIcon className="w-5 h-5 text-[#FF637A]" />
            ) : (
              <ChevronDoubleRightIcon className="w-5 h-5 text-[#FF637A]" />
            )}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] ml-auto mb-4"
          >
            {mobileOpen ? (
              <XMarkIcon className="w-5 h-5 text-[#FF637A]" />
            ) : (
              <Bars3Icon className="w-5 h-5 text-[#FF637A]" />
            )}
          </button>

          <nav className="flex-1 space-y-2">
            {navItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                expanded={expanded}
              />
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t border-gray-200">
            <p className={`text-xs text-gray-500 mb-2 ${!expanded && "hidden"}`}>
              ACCOUNT
            </p>
            {accountItems.map((item) => (
              <SidebarItem
                key={item.href}
                icon={item.icon}
                label={item.label}
                href={item.href}
                expanded={expanded}
              />
            ))}
          </div>
        </div>
      </aside>
    </>
  );
};

const LessonCard = ({ lesson }) => {
  return (
    <motion.div 
      whileHover={{ y: -3 }}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
    >
      {lesson.type === "video" && (
        <div className="relative h-32">
          <img 
            src={lesson.thumbnail} 
            alt={lesson.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
              <PlayIcon className="w-5 h-5 text-[#FF637A]" />
            </div>
          </div>
        </div>
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-black line-clamp-2">{lesson.title}</h3>
          <span className="text-xs text-gray-500 whitespace-nowrap ml-2">{lesson.duration}</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{lesson.course}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-gray-500">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span>{lesson.lastAccessed}</span>
          </div>
          <div className="flex items-center">
            <span className="text-xs font-medium text-[#FF637A] mr-2">{lesson.progress}%</span>
            <div className="w-16 bg-gray-200 rounded-full h-1.5">
              <div 
                className="bg-[#FF637A] h-1.5 rounded-full" 
                style={{ width: `${lesson.progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const QuickLinkCard = ({ link }) => {
  const Icon = link.icon;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm"
    >
      <div className="flex items-start">
        <div className="p-2 bg-[#FF637A]/10 rounded-lg mr-3">
          <Icon className="w-5 h-5 text-[#FF637A]" />
        </div>
        <div>
          <h3 className="font-medium text-black mb-1">{link.title}</h3>
          <p className="text-sm text-gray-600">{link.description}</p>
        </div>
      </div>
      <Link href={link.href} className="mt-3 inline-flex items-center text-sm text-[#FF637A] hover:text-[#e04d65]">
        Go to {link.title}
        <ArrowRightIcon className="w-4 h-4 ml-1" />
      </Link>
    </motion.div>
  );
};

export default function Dashboard() {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

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

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div className="flex items-center">
              <button 
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] mr-2"
                onClick={() => setMobileOpen(true)}
              >
                <Bars3Icon className="w-5 h-5 text-[#FF637A]" />
              </button>
              <Link href="/" className="flex items-center">
                <Image 
                  src="/KKC_Logo.png" 
                  alt="KKC Logo" 
                  width={120} 
                  height={40} 
                  className="h-10 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center space-x-6">
              <Link href="/donate" className="text-sm font-medium text-[#FF637A] hover:text-[#e04d65] transition">
                Donate
              </Link>
              
              <button className="text-gray-600 hover:text-black">
                <BellIcon className="w-6 h-6" />
              </button>
              
              <Link href="/account/profile" className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-[#FF637A] flex items-center justify-center text-white font-medium">
                  <UserCircleIcon className="w-5 h-5" />
                </div>
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-black mb-1">Welcome back, Syed Sinan</h1>
            <p className="text-gray-600">Here's your learning progress and updates</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Where You Left Off */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-black">Where you left off</h2>
                  <Link href="/courses" className="text-sm text-[#FF637A] hover:text-[#e04d65] flex items-center">
                    View all courses
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {recentLessons.map(lesson => (
                    <LessonCard key={lesson.id} lesson={lesson} />
                  ))}
                </div>
              </section>

              {/* Quick Links */}
              <section>
                <h2 className="text-xl font-bold text-black mb-4">Quick Links</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <QuickLinkCard key={index} link={link} />
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Announcements */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-8">
                <div className="p-5 border-b border-gray-200">
                  <h2 className="text-xl font-bold text-black">Announcements</h2>
                </div>
                <div className="p-5">
                  {announcements.length > 0 ? (
                    <div>
                      {/* Announcement items would go here */}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <DocumentTextIcon className="w-10 h-10 text-gray-300 mx-auto mb-3" />
                      <p className="text-gray-500">No current announcements</p>
                      <Link href="/announcements" className="mt-3 inline-block text-sm text-[#FF637A] hover:text-[#e04d65]">
                        View all announcements
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              {/* Progress Summary (optional) */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-5">
                <h3 className="font-bold text-black mb-3">Your Progress</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Courses Completed</span>
                      <span className="font-medium">1/10</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FF637A] h-2 rounded-full" style={{ width: '10%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">Weekly Learning</span>
                      <span className="font-medium">3.5 hours</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#FF637A] h-2 rounded-full" style={{ width: '70%' }} />
                    </div>
                  </div>
                  <div className="pt-3">
                    <Link href="/progress" className="text-sm text-[#FF637A] hover:text-[#e04d65] flex items-center">
                      View detailed progress
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </Link>
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