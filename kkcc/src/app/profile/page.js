'use client';

import { useState } from "react";
import Navbar from "../_components/Navbar";
import Sidebar from "../_components/Sidebar";
import { Bars3Icon, UserCircleIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function ProfilePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "Alex",
    lastName: "Johnson",
    email: "alex.johnson@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Consulting aspirant preparing for case interviews. Interested in healthcare and tech cases.",
    password: "",
    confirmPassword: "",
  });

  const toggleSidebar = () => setExpanded(!expanded);
  const closeSidebar = () => setMobileOpen(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans text-gray-900">
      <Sidebar 
        expanded={expanded} 
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        toggleSidebar={toggleSidebar}
      />
      <Navbar onMenuToggle={() => setMobileOpen(!mobileOpen)} />

      <div className={`transition-all duration-300 ${expanded ? 'lg:ml-64' : 'lg:ml-20'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <UserCircleIcon className="w-8 h-8 text-[#FF637A]" />
                  Profile & Settings
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage your personal information and account security
                </p>
              </div>
              <button 
                className="lg:hidden text-gray-500 hover:text-gray-700"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                className={`py-3 px-6 font-medium text-sm flex items-center gap-2 ${
                  activeTab === "profile"
                    ? "border-b-2 border-[#FF637A] text-[#FF637A]"
                    : "text-gray-500 hover:text-[#FF637A]"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                <UserCircleIcon className="w-5 h-5" />
                Profile
              </button>
              <button
                className={`py-3 px-6 font-medium text-sm flex items-center gap-2 ${
                  activeTab === "security"
                    ? "border-b-2 border-[#FF637A] text-[#FF637A]"
                    : "text-gray-500 hover:text-[#FF637A]"
                }`}
                onClick={() => setActiveTab("security")}
              >
                <LockClosedIcon className="w-5 h-5" />
                Security
              </button>
            </div>

            {activeTab === "profile" && (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {/* Profile Picture */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF637A] to-[#FF8E53] flex items-center justify-center text-white text-4xl font-bold mb-4">
                      AJ
                    </div>
                    {isEditing && (
                      <button
                        type="button"
                        className="text-[#FF637A] hover:underline text-sm"
                      >
                        Change Photo
                      </button>
                    )}
                  </div>

                  {/* Form Fields */}
                  <div className="md:col-span-2 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          readOnly={!isEditing}
                          className={`w-full border ${isEditing ? 'border-gray-300 bg-white' : 'border-transparent bg-gray-50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          readOnly={!isEditing}
                          className={`w-full border ${isEditing ? 'border-gray-300 bg-white' : 'border-transparent bg-gray-50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`w-full border ${isEditing ? 'border-gray-300 bg-white' : 'border-transparent bg-gray-50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`w-full border ${isEditing ? 'border-gray-300 bg-white' : 'border-transparent bg-gray-50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent`}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bio
                      </label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        readOnly={!isEditing}
                        className={`w-full border ${isEditing ? 'border-gray-300 bg-white' : 'border-transparent bg-gray-50'} rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#FF637A] focus:border-transparent`}
                        rows="3"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                  {!isEditing ? (
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="bg-[#FF637A] text-white px-6 py-2 rounded-lg hover:bg-[#e55a6e] transition"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="bg-[#FF637A] text-white px-6 py-2 rounded-lg hover:bg-[#e55a6e] transition"
                      >
                        Save Changes
                      </button>
                    </>
                  )}
                </div>

                <p className="text-sm text-gray-500 mt-4">
                  Member since February 6, 2025
                </p>
              </form>
            )}

            {activeTab === "security" && (
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                    placeholder="Enter your current password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-[#FF637A] focus:border-transparent"
                    placeholder="Confirm new password"
                  />
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200">
                  <button
                    type="button"
                    className="bg-[#FF637A] text-white px-6 py-2 rounded-lg hover:bg-[#e55a6e] transition"
                  >
                    Update Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}