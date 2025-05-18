
'use client';


// ...rest of your code

import { useState } from "react";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#f5f5dc] p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 sm:p-10">
        <h2 className="text-xl font-semibold mb-6 text-gray-900">Profile & Settings</h2>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === "profile"
                ? "border-b-4 border-[#800000] text-[#800000]"
                : "text-gray-500 hover:text-[#800000]"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`py-2 px-4 font-semibold ${
              activeTab === "security"
                ? "border-b-4 border-[#800000] text-[#800000]"
                : "text-gray-500 hover:text-[#800000]"
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        {activeTab === "profile" && (
          <>
            {/* Personal Info Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center justify-center sm:justify-start">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-lime-300 to-green-400"></div>
              </div>
              <div className="flex flex-col gap-4 sm:col-span-1">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded-md p-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded-md p-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Email Address</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded-md p-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded-md p-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    readOnly={!isEditing}
                    className="w-full border rounded-md p-2 bg-gray-100"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-[#800000] text-white px-6 py-2 rounded-md hover:bg-[#5e1a1a] transition"
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(false)}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Submit Changes
                </button>
              )}
            </div>

            <p className="text-sm text-gray-500 mt-4">Member since February 6, 2025</p>
          </>
        )}

        {activeTab === "security" && (
          <div className="flex flex-col gap-6">
            <div>
              <label className="block text-sm text-gray-700 mb-1">New Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border rounded-md p-2 bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border rounded-md p-2 bg-gray-100"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-[#800000] text-white px-6 py-2 rounded-md hover:bg-[#5e1a1a] transition">
                Update Password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
