// components/Sidebar/Sidebar.jsx
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
} from "@heroicons/react/24/outline";
import { SidebarItem } from "./Sidebaritem"; // lowercase 'i'

export const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  const navItems = [
    { icon: HomeIcon, label: "Dashboard", href: "/dashboard" },
    { icon: BookOpenIcon, label: "Courses", href: "/courses" },
    { icon: BellIcon, label: "Announcements", href: "/announcements" },
    { icon: ClipboardDocumentIcon, label: "Exams", href: "/exams" },
    { icon: QuestionMarkCircleIcon, label: "Q&A", href: "/qna" },
  ];

  const accountItems = [
    { icon: UserCircleIcon, label: "Profile", href: "/account/profile" },
    { icon: CogIcon, label: "Settings", href: "/account/settings" },
    { icon: CreditCardIcon, label: "Billing", href: "/account/billing" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-30 transition-all duration-300 ${
          expanded ? "w-64" : "w-20"
        } ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Toggle button */}
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

          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F1EFE7] ml-auto mb-4"
          >
            {mobileOpen ? (
              <ChevronDoubleLeftIcon className="w-5 h-5 text-[#FF637A]" />
            ) : (
              <ChevronDoubleRightIcon className="w-5 h-5 text-[#FF637A]" />
            )}
          </button>

          {/* Navigation items */}
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

          {/* Account section */}
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