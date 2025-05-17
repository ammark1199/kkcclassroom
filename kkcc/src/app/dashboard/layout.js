"use client";
import Navbar from "@/app/components/Navbar";
import SettingsDropdown from "@/app/components/SettingsDropdown";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [selectedTab, setSelectedTab] = useState("Finance");

  const handleToggle = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Navbar onToggle={handleToggle} />

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="w-full flex justify-end items-center px-6 py-4 border-b border-gray-200">
          <SettingsDropdown />
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
