"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../_components/Navbar";
import Sidebar from "../../_components/Sidebar";
import {
  CheckCircleIcon,
  PlayIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const unitData = {
  title: "UNIT 1: Intro to KKC Classroom - Consulting",
  subtitle: "Foundations of consulting and course introduction",
  description:
    "Learn the fundamentals of consulting and what makes KKC Classroom unique.",
  progress: 85,
  lessons: [
    {
      title: "1. Intro to Consulting aspect",
      sections: [
        {
          title: "A) Why did I create it?",
          items: [
            {
              id: "vid1",
              type: "video",
              title: "VID 1",
              duration: "5 min",
              thumbnail: "/placeholder-thumb.jpg",
              completed: true,
            },
            {
              id: "doc1",
              type: "doc",
              title: "Personal Intro of myself",
              duration: "3 min",
              completed: true,
            },
            {
              id: "doc2",
              type: "doc",
              title: "Why I created KKC Classroom",
              duration: "4 min",
              completed: true,
            },
          ],
        },
      ],
    },
    {
      title: "2. Course Overview",
      sections: [
        {
          title: "A) What will you learn",
          items: [
            {
              id: "vid2",
              type: "video",
              title: "VID 2",
              duration: "6 min",
              thumbnail: "/placeholder-thumb.jpg",
              completed: true,
            },
            {
              id: "doc3",
              type: "doc",
              title: "Course curriculum",
              duration: "3 min",
            },
          ],
        },
        {
          title: "B) Who is this course for + What is unique",
          items: [
            {
              id: "vid3",
              type: "video",
              title: "VID 3",
              duration: "7 min",
              thumbnail: "/placeholder-thumb.jpg",
              completed: true,
            },
            {
              id: "doc4",
              type: "doc",
              title: "Unique aspects of this course",
              duration: "4 min",
            },
            {
              id: "doc5",
              type: "doc",
              title: "Target audience",
              duration: "3 min",
            },
          ],
        },
        {
          title: "C) How will you learn",
          items: [
            {
              id: "vid4",
              type: "video",
              title: "VID 4",
              duration: "5 min",
              thumbnail: "/placeholder-thumb.jpg",
              completed: true,
            },
            {
              id: "doc6",
              type: "doc",
              title: "Learning methodology",
              duration: "3 min",
            },
          ],
        },
      ],
    },
    {
      title: "3. What is Consulting?",
      sections: [
        {
          title: "A) Where to start",
          items: [
            {
              id: "vid5",
              type: "video",
              title: "VID 5",
              duration: "8 min",
              thumbnail: "/placeholder-thumb.jpg",
              completed: true,
            },
            {
              id: "doc7",
              type: "doc",
              title: "Consulting deep dive",
              duration: "5 min",
            },
          ],
        },
      ],
    },
    {
      title: "4. Question & Answer",
      sections: [
        {
          title: "A) Community discussion",
          items: [
            {
              id: "disc1",
              type: "discussion",
              title: "Ask questions and share insights",
              duration: "Open",
              icon: ChatBubbleLeftRightIcon,
            },
          ],
        },
      ],
    },
  ],
};

const VideoCard = ({ video, unitId }) => {
  return (
    <Link href={`/courses/courseId/${unitId}/video/${video.id}`}>
      <motion.div
        whileHover={{ y: -2 }}
        className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
      >
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <PlayIcon className="w-5 h-5 text-[#FF637A]" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold mb-1 text-black">{video.title}</h3>
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Video</span>
            <span>{video.duration}</span>
            {video.completed && (
              <span className="text-green-500 flex items-center">
                <CheckCircleIcon className="w-4 h-4 mr-1" />
                Watched
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const DocCard = ({ doc, unitId }) => {
  return (
    <Link href={`/courses/courseId/${unitId}/doc/${doc.id}`}>
      <motion.div
        whileHover={{ x: 5 }}
        className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3"
      >
        <div className="flex items-center">
          <DocumentTextIcon className="w-5 h-5 text-[#FF637A] mr-3" />
          <div>
            <h4 className="font-medium text-black">{doc.title}</h4>
            <p className="text-sm text-gray-600">{doc.duration}</p>
          </div>
        </div>
        <div className="text-[#FF637A] hover:text-[#e04d65]">
          <ArrowRightIcon className="w-5 h-5" />
        </div>
      </motion.div>
    </Link>
  );
};

const DiscussionCard = ({ discussion }) => {
  const Icon = discussion.icon || ChatBubbleLeftRightIcon;
  return (
    <motion.div
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3"
    >
      <div className="flex items-center">
        <Icon className="w-5 h-5 text-[#FF637A] mr-3" />
        <div>
          <h4 className="font-medium text-black">{discussion.title}</h4>
          <p className="text-sm text-gray-600">{discussion.duration}</p>
        </div>
      </div>
      <button className="text-[#FF637A] hover:text-[#e04d65]">
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

const LessonCard = ({ lesson, selected, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: selected ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-4 rounded-xl transition-all cursor-pointer ${
        selected
          ? "bg-[#F1EFE7] border-2 border-[#FF637A] shadow-lg"
          : "bg-white border border-gray-200 hover:border-[#FF637A]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-bold text-black">{lesson.title}</h3>
          {lesson.sections.map((section, idx) => (
            <p key={idx} className="text-sm text-gray-600 mt-1">
              {section.title}
            </p>
          ))}
        </div>
        {lesson.sections.every((section) =>
          section.items.every((item) => item.completed)
        ) && <CheckCircleIcon className="w-5 h-5 text-green-500" />}
      </div>
    </motion.div>
  );
};

export default function Unit1Page({ params }) {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const lesson = unitData.lessons[selectedLesson];
  const unitId = params.unitId; // Get unitId from route params

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const renderContentItem = (item) => {
    switch (item.type) {
      case "video":
        return <VideoCard video={item} unitId={unitId} />;
      case "doc":
        return <DocCard doc={item} unitId={unitId} />;
      case "discussion":
        return <DiscussionCard discussion={item} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F1EFE7] font-sans text-gray-900">
      <Sidebar
        expanded={expanded}
        toggleSidebar={toggleSidebar}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      <div
        className={`transition-all duration-300 ${
          expanded ? "lg:ml-64" : "lg:ml-20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8 border border-gray-200">
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-black">
                    {unitData.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{unitData.subtitle}</p>
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-[#FF637A] h-2 rounded-full"
                        style={{ width: `${unitData.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-black/70 mt-1">
                      {unitData.progress}% completed
                    </p>
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-4 text-black">
                  Lessons
                </h3>
                <div className="space-y-3">
                  {unitData.lessons.map((lesson, idx) => (
                    <LessonCard
                      key={idx}
                      lesson={lesson}
                      selected={selectedLesson === idx}
                      onClick={() => setSelectedLesson(idx)}
                    />
                  ))}
                </div>
              </div>
            </aside>

            <main className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF637A] to-[#F1EFE7] flex items-center justify-center text-white text-xl font-bold">
                    {lesson.title}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                    <div>
                      <h1 className="text-2xl font-bold text-white">
                        {unitData.description}
                      </h1>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {lesson.sections.map((section, sectionIdx) => (
                    <div key={sectionIdx} className="mb-8">
                      <h2 className="text-xl font-bold text-[#FF637A] mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-4">
                        {section.items.map((item, itemIdx) => (
                          <div key={itemIdx}>{renderContentItem(item)}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
