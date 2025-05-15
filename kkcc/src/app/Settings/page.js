export default function SettingsPage() {
    return (
      <div className="min-h-screen bg-[#F1EFE7] text-[#000] font-sans px-6 py-12 flex flex-col items-center space-y-12">
        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold underline decoration-[#FF637A] underline-offset-8">Settings</h1>
          <p className="text-lg text-gray-700">Manage your account, preferences, and payment options</p>
        </div>
  
        {/* Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Profile Info */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Profile Information</h3>
            <p className="text-gray-700 mb-4">Update your name, email, or password.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">Edit Profile</button>
          </div>
  
          {/* Preferences */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Learning Preferences</h3>
            <p className="text-gray-700 mb-4">Set your weekly goals and adjust your topic focus.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">Adjust Preferences</button>
          </div>
  
          {/* Payment Info */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Manage Payments</h3>
            <p className="text-gray-700 mb-4">Update your billing info or view your plan.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">View Billing</button>
          </div>
  
          {/* Notifications */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Notifications</h3>
            <p className="text-gray-700 mb-4">Control how and when we reach you.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">Notification Settings</button>
          </div>
  
          {/* Privacy & Security */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Privacy & Security</h3>
            <p className="text-gray-700 mb-4">Manage your data and sign-in devices.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">Privacy Options</button>
          </div>
  
          {/* Support & Feedback */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Support & Feedback</h3>
            <p className="text-gray-700 mb-4">Have suggestions or issues? Let us know.</p>
            <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm">Give Feedback</button>
          </div>
        </div>
  
        {/* Decorative Gradient */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF637A]/5 via-[#F1EFE7]/50 to-white" />
      </div>
    );
  }
  