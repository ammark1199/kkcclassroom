"use client";
import { 
  CheckCircleIcon, 
  PlayIcon, 
  DocumentTextIcon, 
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  HomeIcon,
  BellIcon,
  BookOpenIcon,
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
  GiftIcon,
  ShoppingBagIcon
} from "@heroicons/react/24/solid";
import Link from "next/link";

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

export default function Sidebar({ expanded, toggleSidebar, mobileOpen, setMobileOpen }) {
  const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpenIcon, label: "Courses", href: "/courses" },
    { icon: BellIcon, label: "Announcements", href: "/announcements" },
    { icon: ClipboardDocumentIcon, label: "Exams", href: "/exams" },
    { icon: QuestionMarkCircleIcon, label: "Q&A", href: "/qna" },
    { icon: BookmarkIcon, label: "Resources", href: "/resources" },
    { icon: GiftIcon, label: "Benefits", href: "/benefits" },
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
}