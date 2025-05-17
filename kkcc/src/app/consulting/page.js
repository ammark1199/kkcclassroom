"use client";
import { useState } from "react";
import { 
  CheckCircleIcon, 
  LockClosedIcon, 
  PlayIcon, 
  BookOpenIcon, 
  DocumentTextIcon, 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
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
  BookmarkIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const courseUnits = [
  {
    title: "UNIT 1: Intro to KKC Classroom - Consulting",
    subtitle: "Foundations of consulting and course introduction",
    unlocked: true,
    description: "Learn the fundamentals of consulting and what makes KKC Classroom unique.",
    completed: true,
    sections: [
      {
        title: "a) Intro to Consulting aspect",
        items: [
          {
            type: "video",
            title: "Why did I create it? - VIDEO 1",
            url: "#",
            duration: "5 min",
            thumbnail: "/consulting-thumb1.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Personal Intro of myself",
            url: "#",
            duration: "3 min",
            completed: true
          },
          {
            type: "doc",
            title: "Why I created KKC Classroom",
            url: "#",
            duration: "4 min",
            completed: true
          }
        ]
      },
      {
        title: "b) Course Overview",
        items: [
          {
            type: "video",
            title: "What will you learn - VIDEO 2",
            url: "#",
            duration: "6 min",
            thumbnail: "/consulting-thumb2.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Course curriculum",
            url: "#",
            duration: "3 min"
          },
          {
            type: "video",
            title: "Who is this course for - VIDEO 3",
            url: "#",
            duration: "7 min",
            thumbnail: "/consulting-thumb3.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Unique aspects of this course",
            url: "#",
            duration: "4 min"
          },
          {
            type: "video",
            title: "How will you learn - VIDEO 4",
            url: "#",
            duration: "5 min",
            thumbnail: "/consulting-thumb4.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Learning methodology",
            url: "#",
            duration: "3 min"
          }
        ]
      },
      {
        title: "c) What is Consulting?",
        items: [
          {
            type: "video",
            title: "Consulting explained - VIDEO 5",
            url: "#",
            duration: "8 min",
            thumbnail: "/consulting-thumb5.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Consulting deep dive",
            url: "#",
            duration: "5 min"
          }
        ]
      },
      {
        title: "d) Question & Answer",
        items: [
          {
            type: "discussion",
            title: "Community discussion",
            url: "#",
            duration: "Open",
            icon: ChatBubbleLeftRightIcon
          }
        ]
      }
    ],
    quizLink: "/consulting/unit-1/quiz",
    progress: 85
  },
  {
    title: "UNIT 2: Is Consulting for You?",
    subtitle: "Evaluating if consulting matches your goals",
    unlocked: true,
    description: "Understand the pros and cons of consulting and if it's the right path for you.",
    completed: false,
    sections: [
      {
        title: "Why this section?",
        items: [
          {
            type: "video",
            title: "Introduction - VIDEO 6",
            url: "#",
            duration: "6 min",
            thumbnail: "/consulting-thumb6.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Purpose of this unit",
            url: "#",
            duration: "3 min"
          }
        ]
      },
      {
        title: "Pros & Cons",
        items: [
          {
            type: "video",
            title: "Pros and cons - VIDEO 7",
            url: "#",
            duration: "8 min",
            thumbnail: "/consulting-thumb7.jpg",
            completed: true
          },
          {
            type: "doc",
            title: "Detailed pros and cons",
            url: "#",
            duration: "5 min"
          },
          {
            type: "doc",
            title: "Career timeline",
            url: "#",
            duration: "4 min"
          },
          {
            type: "doc",
            title: "Firm tier list",
            url: "#",
            duration: "6 min"
          }
        ]
      },
      {
        title: "Question & Answer",
        items: [
          {
            type: "discussion",
            title: "Community discussion",
            url: "#",
            duration: "Open",
            icon: ChatBubbleLeftRightIcon
          }
        ]
      }
    ],
    quizLink: "/consulting/unit-2/quiz",
    progress: 40
  },
  {
    title: "UNIT 3: Networking Mastery",
    subtitle: "Building professional relationships effectively",
    unlocked: true,
    description: "Learn formal and informal networking strategies that actually work.",
    completed: false,
    sections: [
      {
        title: "Networking Fundamentals",
        items: [
          {
            type: "video",
            title: "What is Networking?",
            url: "#",
            duration: "7 min",
            thumbnail: "/networking-thumb1.jpg"
          },
          {
            type: "doc",
            title: "Networking importance",
            url: "#",
            duration: "4 min"
          },
          {
            type: "video",
            title: "Types of networking",
            url: "#",
            duration: "6 min",
            thumbnail: "/networking-thumb2.jpg"
          }
        ]
      },
      {
        title: "Practical Networking",
        items: [
          {
            type: "video",
            title: "Elevator Pitch",
            url: "#",
            duration: "5 min",
            thumbnail: "/networking-thumb3.jpg"
          },
          {
            type: "doc",
            title: "LinkedIn Profile Guide",
            url: "#",
            duration: "8 min"
          },
          {
            type: "video",
            title: "Identifying Key Contacts",
            url: "#",
            duration: "6 min",
            thumbnail: "/networking-thumb4.jpg"
          }
        ]
      },
      {
        title: "Cold Outreach Strategies",
        items: [
          {
            type: "video",
            title: "Cold Outreach 101",
            url: "#",
            duration: "7 min",
            thumbnail: "/networking-thumb5.jpg"
          },
          {
            type: "doc",
            title: "Outreach Templates",
            url: "#",
            duration: "5 min"
          },
          {
            type: "video",
            title: "Timing & Follow-ups",
            url: "#",
            duration: "6 min",
            thumbnail: "/networking-thumb6.jpg"
          }
        ]
      },
      {
        title: "Networking Test",
        items: [
          {
            type: "quiz",
            title: "Test Your Knowledge",
            url: "/networking/quiz",
            duration: "10 min",
            questions: [
              "What is the primary purpose of networking?",
              "How long is an elevator pitch supposed to be?",
              "Why is identifying key people important?",
              "What medium is most effective for outreach?"
            ]
          }
        ]
      }
    ],
    quizLink: "/consulting/unit-3/quiz",
    progress: 15
  },
  ...Array.from({ length: 4 }, (_, i) => ({
    title: `UNIT ${i + 4}: Advanced Consulting Topics`,
    subtitle: "Premium content for serious learners",
    unlocked: false,
    completed: false,
    description: "This content is available with our premium subscription.",
    sections: [],
    quizLink: "",
    progress: 0
  }))
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
    { icon: UserCircleIcon, label: "Profile", href: "profile" },
    { icon: CogIcon, label: "Settings", href: "settings" },
    { icon: CreditCardIcon, label: "Subscription Management", href: "/payment" },
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

const CourseCard = ({ unit, index, selected, onClick }) => {
  return (
    <motion.div 
      whileHover={{ scale: selected ? 1 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative p-5 rounded-xl transition-all cursor-pointer ${
        selected ? "bg-[#F1EFE7] border-2 border-[#FF637A] shadow-lg" : "bg-white border border-gray-200 hover:border-[#FF637A]"
      } ${!unit.unlocked ? "opacity-70 cursor-not-allowed" : ""}`}
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FF637A] bg-opacity-20 text-[#FF637A] font-bold mr-3">
              {index + 1}
            </span>
            <h3 className="font-bold text-lg text-black">{unit.title}</h3>
          </div>
          <p className="text-sm text-gray-600 ml-11">{unit.subtitle}</p>
        </div>
        {unit.completed ? (
          <CheckCircleIcon className="w-6 h-6 text-green-500" />
        ) : !unit.unlocked ? (
          <LockClosedIcon className="w-5 h-5 text-gray-400" />
        ) : null}
      </div>
      
      {unit.unlocked && (
        <div className="mt-4 ml-11">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#FF637A] h-2 rounded-full" 
              style={{ width: `${unit.progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-black/70 mt-1">{unit.progress}% completed</p>
        </div>
      )}
    </motion.div>
  );
};

const VideoCard = ({ video }) => {
  return (
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
  );
};

const LessonItem = ({ lesson }) => {
  return (
    <motion.div 
      whileHover={{ x: 5 }}
      className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3"
    >
      <div className="flex items-center">
        {lesson.completed ? (
          <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3" />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 mr-3"></div>
        )}
        <div>
          <h4 className="font-medium text-black">{lesson.title}</h4>
          <p className="text-sm text-gray-600">{lesson.duration}</p>
        </div>
      </div>
      <button className="text-[#FF637A] hover:text-[#e04d65]">
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

export default function ConsultingCourse() {
  const [selectedUnit, setSelectedUnit] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const unit = courseUnits[selectedUnit];

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const renderSectionItem = (item) => {
    switch(item.type) {
      case 'video':
        return (
          <motion.div 
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-200"
          >
            <div className="relative">
              <img 
                src={item.thumbnail} 
                alt={item.title} 
                className="w-full h-40 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <PlayIcon className="w-5 h-5 text-[#FF637A]" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-1 text-black">{item.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>Video</span>
                <span>{item.duration}</span>
                {item.completed && (
                  <span className="text-green-500 flex items-center">
                    <CheckCircleIcon className="w-4 h-4 mr-1" />
                    Watched
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        );
      
      case 'doc':
        return (
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3"
          >
            <div className="flex items-center">
              <DocumentTextIcon className="w-5 h-5 text-[#FF637A] mr-3" />
              <div>
                <h4 className="font-medium text-black">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.duration}</p>
              </div>
            </div>
            <button className="text-[#FF637A] hover:text-[#e04d65]">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </motion.div>
        );
      
      case 'discussion':
        const Icon = item.icon || ChatBubbleLeftRightIcon;
        return (
          <motion.div 
            whileHover={{ x: 5 }}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 shadow-sm mb-3"
          >
            <div className="flex items-center">
              <Icon className="w-5 h-5 text-[#FF637A] mr-3" />
              <div>
                <h4 className="font-medium text-black">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.duration}</p>
              </div>
            </div>
            <button className="text-[#FF637A] hover:text-[#e04d65]">
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </motion.div>
        );
      
      case 'quiz':
        return (
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-4 text-black">{item.title}</h3>
            <ul className="list-disc pl-5 mb-4 text-gray-600">
              {item.questions.map((q, i) => (
                <li key={i} className="mb-2">{q}</li>
              ))}
            </ul>
            <a
              href={item.url}
              className="inline-flex items-center px-6 py-3 bg-[#FF637A] text-white rounded-lg font-semibold hover:bg-[#e04d65] transition shadow-md"
            >
              Take Quiz
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        );
      
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
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-8 border border-gray-200">
                <h2 className="text-xl font-bold mb-6 flex items-center text-black">
                  <BookOpenIcon className="w-5 h-5 mr-2 text-[#FF637A]" />
                  Course Content
                </h2>
                <div className="space-y-3">
                  {courseUnits.map((u, idx) => (
                    <CourseCard
                      key={idx}
                      unit={u}
                      index={idx}
                      selected={selectedUnit === idx}
                      onClick={() => u.unlocked && setSelectedUnit(idx)}
                    />
                  ))}
                </div>
              </div>
            </aside>

            <main className="lg:w-2/3">
              {unit.unlocked ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200"
                >
                  <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF637A] to-[#F1EFE7] flex items-center justify-center text-white text-xl font-bold">
                      {unit.title}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end">
                      <div className="flex justify-between items-end">
                        <div>
                          <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-2 text-white">
                            {unit.title.split(':')[0]}
                          </span>
                          <h1 className="text-2xl font-bold text-white">{unit.title.split(':')[1].trim()}</h1>
                          <p className="text-white/90 mt-1">{unit.subtitle}</p>
                        </div>
                        {unit.completed && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium text-white">
                            <CheckCircleIcon className="w-4 h-4 mr-1" />
                            Completed
                          </span>
                        )}
                      </div>
                      <div className="mt-4">
                        <div className="w-full bg-white/30 rounded-full h-2">
                          <div 
                            className="bg-white h-2 rounded-full" 
                            style={{ width: `${unit.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-white/90 mt-1 text-right">{unit.progress}% complete</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <p className="text-gray-700 mb-8">{unit.description}</p>

                    {unit.sections.map((section, sectionIdx) => (
                      <section key={sectionIdx} className="mb-10">
                        <h2 className="text-xl font-bold text-[#FF637A] mb-4">
                          {section.title}
                        </h2>
                        <div className="space-y-4">
                          {section.items.map((item, itemIdx) => (
                            <div key={itemIdx}>
                              {renderSectionItem(item)}
                            </div>
                          ))}
                        </div>
                      </section>
                    ))}

                    {unit.quizLink && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="text-lg font-semibold mb-4 text-black">Ready to test your knowledge?</h3>
                        <p className="text-gray-600 mb-6">Take this quiz to assess your understanding of the material.</p>
                        <a
                          href={unit.quizLink}
                          className="inline-flex items-center px-6 py-3 bg-[#FF637A] text-white rounded-lg font-semibold hover:bg-[#e04d65] transition shadow-md"
                        >
                          Take Unit Quiz
                          <ArrowRightIcon className="w-5 h-5 ml-2" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden p-12 text-center border border-gray-200"
                >
                  <div className="max-w-md mx-auto">
                    <div className="w-20 h-20 mx-auto bg-[#F1EFE7] rounded-full flex items-center justify-center mb-6">
                      <LockClosedIcon className="w-10 h-10 text-[#FF637A]" />
                    </div>
                    <h2 className="text-2xl font-bold text-black mb-2">{unit.title}</h2>
                    <p className="text-gray-600 mb-6">{unit.subtitle}</p>
                    <p className="text-gray-500 mb-8">
                      This premium content is locked. Upgrade your plan to access all course units, advanced materials, and expert resources.
                    </p>
                    <button className="px-8 py-3 bg-[#FF637A] text-white rounded-lg font-semibold hover:bg-[#e04d65] transition shadow-lg">
                      Unlock All Content
                    </button>
                    <p className="text-sm text-gray-400 mt-4">Already upgraded? <a href="#" className="text-[#FF637A] hover:underline">Refresh access</a></p>
                  </div>
                </motion.div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}