"use client";
import { useState } from "react";
import {
  ChevronDown,
  LogOut,
  Settings,
  Bell,
  CreditCard,
  HelpCircle,
  Link,
} from "lucide-react";

export default function SettingsDropdown() {
  // State to manage dropdown open/close
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown visibility
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Menu items for the dropdown
  const menuItems = [
    {
      name: "KKC Consulting",
      icon: <Link className="mr-2" />,
      link: "https://kkc-consulting.ca/",
      newTab: true,
    },
    {
      name: "Donate",
      icon: <CreditCard className="mr-2" />,
      link: "/donate",
    },
    {
      name: "Account Settings",
      icon: <Settings className="mr-2" />,
      link: "/account-settings",
    },
    {
      name: "Subscription Management",
      icon: <CreditCard className="mr-2" />,
      link: "/subscription",
    },
    {
      name: "Notifications",
      icon: <Bell className="mr-2" />,
      link: "/notifications",
    },
    {
      name: "Help & Support",
      icon: <HelpCircle className="mr-2" />,
      link: "/help",
    },
    {
      name: "Log Out",
      icon: <LogOut className="mr-2" />,
      link: "/logout",
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={handleToggle}
        className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none"
      >
        Settings <ChevronDown className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.newTab ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 hover:bg-gray-100 text-gray-800"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
