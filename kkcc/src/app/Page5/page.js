"use client";
import Navbar from "@/app/components/Navbar";
import Dashboard from "@/app/components/Dashboard";
import { useState } from "react";

export default function Page() {
  const [selectedTab, setSelectedTab] = useState("Finance");

  const handleToggle = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="bg-[#f1efe7] min-h-screen flex flex-col">
      <Navbar onToggle={handleToggle} />
      <div className="flex-grow">
        <Dashboard selectedTab={selectedTab} />
      </div>
    </div>
  );
}
