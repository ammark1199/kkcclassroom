"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpenIcon,
  CreditCardIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { label: "Courses", href: "/courses", icon: <BookOpenIcon className="h-6 w-6" /> },
    { label: "Pricing", href: "/subscription", icon: <CreditCardIcon className="h-6 w-6" /> },
    { label: "About", href: "/about", icon: <InformationCircleIcon className="h-6 w-6" /> },
    { label: "Help", href: "/help", icon: <QuestionMarkCircleIcon className="h-6 w-6" /> },
  ];

  return (
    <aside
      className={`${
        collapsed ? "w-20" : "w-64"
      } bg-[#e4dfd2] px-4 py-6 flex flex-col border-r border-gray-300 min-h-screen transition-all duration-300`}
    >
      {/* Logo and Collapse Button */}
      <div className="flex items-center justify-between mb-10">
        <Link href="/Page5">
          <Image
            src="/KKC_Logo.png"
            alt="KKC Logo"
            width={collapsed ? 40 : 180}
            height={60}
            priority
          />
        </Link>
        <button onClick={() => setCollapsed(!collapsed)} className="text-gray-600 ml-2">
          {collapsed ? (
            <ArrowRightCircleIcon className="h-6 w-6" />
          ) : (
            <ArrowLeftCircleIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Navigation */}
      <div className="flex flex-col space-y-6 text-lg font-medium">
        {menuItems.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            className="flex items-center space-x-3 text-black hover:text-[#ff637a]"
          >
            {icon}
            {!collapsed && <span>{label}</span>}
          </Link>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto pt-10 text-sm">
        <Link
          href="https://kkc-consulting.ca/"
          target="_blank"
          className="hover:text-[#ff637a] flex items-center"
        >
          <InformationCircleIcon className="h-5 w-5 mr-2" />
          {!collapsed && "KKC Consulting"}
        </Link>
      </div>
    </aside>
  );
}
