"use client";
import { useState } from "react";
import Dashboard from "@/app/components/Dashboard";

export default function DashboardPage() {
  const [selectedTab, setSelectedTab] = useState("Finance");

  // You can lift this state up or use context if you want the layout to control it,
  // but for now, you can keep it local or pass it via props from layout

  return <Dashboard selectedTab={selectedTab} />;
}
