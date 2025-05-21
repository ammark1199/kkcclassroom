'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const consultingReels = [
  {
    id: 1,
    title: 'Ace Your Consulting Interview',
    description: 'Top tips from a Bain associate.',
    datePosted: new Date('2024-05-09'),
    duration: '1:20',
    likes: 128,
    comments: 32,
    tags: ['Resume'],
  },
  {
    id: 2,
    title: 'Master the Case Method',
    description: 'How to structure a case effectively.',
    datePosted: new Date('2024-05-11'),
    duration: '2:05',
    likes: 89,
    comments: 21,
    tags: ['Networking'],
  },
];

const investmentBankingReels = [
  {
    id: 3,
    title: 'Breaking Into Investment Banking',
    description: 'How to land your first role on Bay Street.',
    datePosted: new Date('2024-05-12'),
    duration: '2:15',
    likes: 110,
    comments: 45,
    tags: ['Resume', 'Networking'],
  },
  {
    id: 4,
    title: 'Day in the Life: Investment Banking Analyst',
    description: 'Realistic expectations and insights.',
    datePosted: new Date('2024-05-14'),
    duration: '1:55',
    likes: 200,
    comments: 60,
    tags: ['Day in the Life'],
  },
];

function getTimeAgo(date) {
  const diff = Math.floor((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
  if (diff === 0) return 'Today';
  if (diff === 1) return '1 day ago';
  return `${diff} day${diff === 1 ? '' : 's'} ago`;
}

function ReelCard({ title, description, datePosted, duration, likes, comments }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border border-black rounded-3xl p-5 bg-white shadow-md mb-8 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-black bg-white">
            <Image
              src="/Square-Logo-Full.png"
              alt="KKC Logo"
              width={56}
              height={56}
              className="object-cover rounded-full"
            />
          </div>
          <span className="text-base font-semibold">KKC</span>
        </div>
        <span className="text-sm text-gray-500">{getTimeAgo(datePosted)}</span>
      </div>

      <div className="text-lg font-semibold mb-1">{title}</div>
      <div className="text-sm text-gray-700 mb-3">{description}</div>

      <div className="relative w-full h-72 bg-gradient-to-br from-[#fbe4e6] to-[#d9f3ee] border border-black rounded-2xl flex items-center justify-center text-lg font-bold overflow-hidden">
        <span className="z-10">Reel</span>
        <div className="absolute inset-0 bg-black bg-opacity-10" />
        <div className="absolute bottom-3 right-3 text-white text-xs bg-black bg-opacity-60 px-2 py-1 rounded">
          {duration}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-30 text-6xl">
          ▶
        </div>
      </div>

      <div className="flex justify-between items-center mt-3 text-sm text-gray-600">
        <div className="flex space-x-4">
          <span className="hover:text-[#FF637A] transition">❤️ {likes}</span>
          <span className="hover:text-[#FF637A] transition">💬 {comments}</span>
          <span className="hover:text-[#FF637A] transition cursor-pointer">📤</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BenefitsPage() {
  const [activeTab, setActiveTab] = useState('Consulting');
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('recent');
  const [visibleCount, setVisibleCount] = useState(4);

  const containerRef = useRef(null);

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
    .filter((reel) =>
      reel.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'All' || reel.tags.includes(filter))
    )
    .sort((a, b) => {
      if (sortOption === 'recent') {
        return new Date(b.datePosted) - new Date(a.datePosted);
      }
      if (sortOption === 'popular') {
        return b.likes - a.likes;
      }
      return 0;
    });

  const tagFilters = ['All', 'Networking', 'Resume', 'Day in the Life'];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F1EFE7] text-black font-sans px-6 py-10">
      <h1 className="text-4xl font-extrabold mb-8">Benefits</h1>

      <div className="flex bg-white rounded-full w-fit overflow-hidden border border-black shadow mb-10">
        {['Consulting', 'Investment Banking'].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setVisibleCount(4);
            }}
            className={`px-6 py-2 font-semibold transition-colors duration-300 ${
              activeTab === tab
                ? 'bg-[#FF637A] text-white'
                : 'text-black hover:bg-[#FFE5E9]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="sticky top-0 bg-[#F1EFE7] z-10 py-4 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex items-center space-x-2 bg-white border border-black rounded-xl px-4 py-2 shadow-md w-full md:w-auto">
            <span className="text-xl">🔍</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search reels..."
              className="w-full text-lg bg-transparent focus:outline-none"
            />
          </div>

          <div className="relative">
            <select
              className="border border-black bg-white rounded-xl px-4 py-2 shadow-md text-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A]"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {tagFilters.map((name) => (
            <button
              key={name}
              onClick={() => setFilter(name)}
              className={`px-5 py-2 rounded-full font-medium border border-black transition-colors duration-300 ${
                filter === name
                  ? 'bg-[#FF637A] text-white'
                  : 'bg-white text-black hover:bg-[#FFE5E9]'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col mt-6">
        {filteredReels.slice(0, visibleCount).map((reel) => (
          <ReelCard key={reel.id} {...reel} />
        ))}
      </div>
    </div>
  );
}
