"use client";
import Image from "next/image";
import SettingsDropdown from "@/app/components/SettingsDropdown";
import Link from "next/link";
import { useState } from "react";

export default function Navbar({ onToggle }) {
  const [activeTab, setActiveTab] = useState("Finance");

  const handleToggle = (tab) => {
    setActiveTab(tab);
    onToggle(tab);
  };

  return (
    <div className="w-full bg-[#f1efe7] px-10 py-4 flex justify-between items-center border-b border-gray-200">
      {/* Left Side - Logo */}
      <Link href="/Page5">
        <div className="flex items-center space-x-3 cursor-pointer">
          <Image
            src="/KKC_Logo.png"
            alt="KKC Classroom Logo"
            width={180}
            height={60}
          />
        </div>
      </Link>

      {/* Middle - Navigation */}
      <div className="space-x-8 text-lg font-medium">
        <button
          onClick={() => handleToggle("Consulting")}
          className={`${
            activeTab === "Consulting" ? "text-[#ff637a]" : "text-black"
          } hover:text-[#ff637a]`}
        >
          Consulting
        </button>
        <button
          onClick={() => handleToggle("Finance")}
          className={`${
            activeTab === "Finance" ? "text-[#ff637a]" : "text-black"
          } hover:text-[#ff637a]`}
        >
          Finance
        </button>
      </div>

      {/* Right Side - Settings */}
      <div className="flex items-center space-x-4">
        <Link
          href="https://kkc-consulting.ca/"
          target="_blank"
          className="hover:text-[#ff637a]"
        >
          KKC Consulting
        </Link>
        <SettingsDropdown />
      </div>
    </div>
  );
}
