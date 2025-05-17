// components/Sidebar/SidebarItem.jsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SidebarItem = ({ icon: Icon, label, href, expanded }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center p-3 rounded-lg transition-colors ${
        isActive
          ? "bg-[#FF637A] text-white"
          : "hover:bg-[#F1EFE7] text-gray-700 hover:text-black"
      }`}
    >
      <Icon className="w-5 h-5" />
      {expanded && <span className="ml-3">{label}</span>}
    </Link>
  );
};