'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '../_components/Navbar';
import Sidebar from '../_components/Sidebar';
import { FilmIcon, HeartIcon, ChatBubbleLeftEllipsisIcon, ArrowUpTrayIcon, ClockIcon, FireIcon } from '@heroicons/react/24/outline';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


const consultingReels = [
  {
    id: 1,
    title: 'Ace Your Consulting Interview',
    description: 'Top tips from a Bain associate to help you stand out in your next consulting interview.',
    datePosted: new Date('2024-05-09'),
    duration: '1:20',
    likes: 128,
    comments: 32,
    tags: ['Resume'],
    thumbnail: '/consulting-reel1.jpg'
  },
  {
    id: 2,
    title: 'Master the Case Method',
    description: 'Learn how to structure a case effectively with frameworks from top consultants.',
    datePosted: new Date('2024-05-11'),
    duration: '2:05',
    likes: 89,
    comments: 21,
    tags: ['Networking'],
    thumbnail: '/consulting-reel2.jpg'
  },
  {
    id: 3,
    title: 'Behavioral Interview Prep',
    description: 'How to answer "Tell me about yourself" and other common questions.',
    datePosted: new Date('2024-05-15'),
    duration: '1:45',
    likes: 156,
    comments: 42,
    tags: ['Interview'],
    thumbnail: '/consulting-reel3.jpg'
  },
  {
    id: 4,
    title: 'Consulting Salary Breakdown',
    description: 'Compensation ranges across MBB and tier 2 firms globally.',
    datePosted: new Date('2024-05-18'),
    duration: '2:30',
    likes: 210,
    comments: 78,
    tags: ['Compensation'],
    thumbnail: '/consulting-reel4.jpg'
  }
];

const investmentBankingReels = [
  {
    id: 5,
    title: 'Breaking Into Investment Banking',
    description: 'Actionable steps to land your first role on Wall Street or Bay Street.',
    datePosted: new Date('2024-05-12'),
    duration: '2:15',
    likes: 110,
    comments: 45,
    tags: ['Resume', 'Networking'],
    thumbnail: '/banking-reel1.jpg'
  },
  {
    id: 6,
    title: 'Day in the Life: Investment Banking Analyst',
    description: 'Realistic expectations and insights from a first-year analyst.',
    datePosted: new Date('2024-05-14'),
    duration: '1:55',
    likes: 200,
    comments: 60,
    tags: ['Day in the Life'],
    thumbnail: '/banking-reel2.jpg'
  },
  {
    id: 7,
    title: 'Financial Modeling Masterclass',
    description: 'Build a complete DCF model from scratch with best practices.',
    datePosted: new Date('2024-05-16'),
    duration: '3:20',
    likes: 185,
    comments: 53,
    tags: ['Technical'],
    thumbnail: '/banking-reel3.jpg'
  },
  {
    id: 8,
    title: 'Banking Exit Opportunities',
    description: 'Where do bankers go after 2-3 years? Private equity, hedge funds, and more.',
    datePosted: new Date('2024-05-20'),
    duration: '2:45',
    likes: 175,
    comments: 49,
    tags: ['Career'],
    thumbnail: '/banking-reel4.jpg'
  }
];

function getTimeAgo(date) {
  const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'Today';
  if (diff === 1) return '1 day ago';
  return `${diff} day${diff === 1 ? '' : 's'} ago`;
}

function ReelCard({ title, description, datePosted, duration, likes, comments, thumbnail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition-all duration-300 mb-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-white">
            <Image
              src="/Square-Logo-Full.png"
              alt="KKC Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-sm font-medium">KKC Classroom</span>
        </div>
        <span className="text-xs text-gray-500">{getTimeAgo(datePosted)}</span>
      </div>

      <div className="text-lg font-bold mb-2">{title}</div>
      <div className="text-sm text-gray-600 mb-4">{description}</div>

      <div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden group">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute bottom-3 right-3 text-white text-xs bg-black/60 px-2 py-1 rounded flex items-center">
          <FilmIcon className="w-3 h-3 mr-1" />
          {duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-[#FF637A] flex items-center justify-center">
              <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <div className="flex space-x-4">
          <button className="flex items-center text-gray-600 hover:text-[#FF637A] transition">
            <HeartIcon className="w-4 h-4 mr-1" />
            {likes}
          </button>
          <button className="flex items-center text-gray-600 hover:text-[#FF637A] transition">
            <ChatBubbleLeftEllipsisIcon className="w-4 h-4 mr-1" />
            {comments}
          </button>
        </div>
        <button className="text-gray-600 hover:text-[#FF637A] transition">
          <ArrowUpTrayIcon className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
}

export default function BenefitsPage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState('Consulting');
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('recent');
  const [visibleCount, setVisibleCount] = useState(4);

  const containerRef = useRef(null);

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.scrollHeight - 300
      ) {
        setVisibleCount((prev) => prev + 2);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const reels = activeTab === 'Consulting' ? consultingReels : investmentBankingReels;

const filteredReels = reels
  .filter((reel) => (
    reel.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reel.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reel.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  ))
  .filter((reel) => filter === 'All' || reel.tags.includes(filter))
  .sort((a, b) => {
    if (sortOption === 'recent') return new Date(b.datePosted) - new Date(a.datePosted);
    if (sortOption === 'popular') return b.likes - a.likes;
    return 0;
  });

  const tagFilters = ['All', 'Resume', 'Networking', 'Interview', 'Technical', 'Career', 'Day in the Life', 'Compensation'];

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
          <div ref={containerRef} className="space-y-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Benefits & Reels</h1>
                <p className="text-gray-600 mt-1">
                  Short-form videos to help you accelerate your {activeTab.toLowerCase()} career
                </p>
              </div>
              <button 
                className="lg:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex bg-white rounded-xl w-fit overflow-hidden border border-gray-200 shadow-sm">
              {['Consulting', 'Investment Banking'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setVisibleCount(4);
                  }}
                  className={`px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeTab === tab
                      ? 'bg-[#FF637A] text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filters */}
            <div className="sticky top-0 bg-[#F8F9FA] z-10 pt-4 pb-6 space-y-4 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search reels..."
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent text-sm"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="relative">
<               select
                     className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] focus:border-transparent text-sm"
                      value={sortOption}
                     onChange={(e) => setSortOption(e.target.value)}
>
                     <option value="recent">Most Recent</option>
                     <option value="popular">Most Popular</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2">
                {tagFilters.map((name) => (
                  <button
                    key={name}
                    onClick={() => setFilter(name)}
                    className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors duration-300 ${
                      filter === name
                        ? 'bg-[#FF637A] text-white border-[#FF637A]'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-[#FF637A]'
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Reels Grid */}
            {filteredReels.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReels.slice(0, visibleCount).map((reel) => (
                  <ReelCard key={reel.id} {...reel} />
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <FilmIcon className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No reels found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}

            {/* Loading more indicator */}
            {visibleCount < filteredReels.length && (
              <div className="flex justify-center py-6">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF637A]"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}