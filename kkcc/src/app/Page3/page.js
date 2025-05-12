export default function Home() {
    return (
      <div className="min-h-screen flex bg-[#F1EFE7] text-[#000] font-sans overflow-hidden">
        {/* Left 2/5: Photo + Fun Fact with Design Enhancements */}
        <div className="w-2/5 relative flex flex-col justify-center items-center px-12 py-16 bg-white shadow-xl rounded-r-3xl z-10 overflow-hidden">
          {/* Decorative blur background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF637A]/10 via-[#F1EFE7] to-white blur-2xl opacity-70 -z-10" />
  
          {/* Abstract accent shape */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF637A]/20 rounded-full blur-xl -z-10" />
          <div className="absolute bottom-20 right-10 w-44 h-44 bg-[#FF637A]/10 rounded-full blur-3xl -z-10" />
  
          <div className="z-10 flex flex-col items-center text-center space-y-6">
            {/* Profile Image */}
            <div className="w-60 h-60 rounded-full overflow-hidden bg-gray-300 shadow-lg ring-4 ring-[#FF637A]/30">
              {/* If you want to use an image later, replace the div below with <img src="/profileA.jpg" /> */}
              <img
                src="/profileA.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
  
            {/* Fun Fact Text */}
            <div className="space-y-2 px-4">
              <h1 className="text-3xl font-bold text-[#FF637A]">Fun Fact</h1>
              <p className="text-gray-600 text-base leading-relaxed">
                The KKC name? It started as a joke, became a team, then a movement.
                Now you're part of it.
              </p>
            </div>
          </div>
        </div>
  
        {/* Right 3/5: Signup Section */}
        <div className="w-3/5 flex flex-col justify-center items-center px-16 py-16 space-y-10">
          {/* Header */}
          <h2 className="text-4xl font-extrabold tracking-tight text-black leading-snug text-center">
            Be a part of <br />
            <span className="inline-block underline decoration-[#FF637A] underline-offset-4">KKC Today!</span>
          </h2>
  
          {/* Social Signup Buttons */}
          <div className="w-full max-w-md space-y-4">
            <button className="w-full bg-[#B91C1C] text-white px-6 py-3 rounded-xl shadow hover:bg-[#991B1B] transition text-sm font-medium">
              Continue with Google
            </button>
            <button className="w-full bg-[#0A66C2] text-white px-6 py-3 rounded-xl shadow hover:bg-[#004182] transition text-sm font-medium">
              Continue with LinkedIn
            </button>
          </div>
  
          {/* Divider */}
          <div className="flex items-center space-x-4 text-sm text-gray-500 pt-6 w-full max-w-md">
            <div className="flex-grow h-px bg-gray-300" />
            <span>or... Just Use Email</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>
  
          {/* Email Form (centered) */}
          <form className="w-full max-w-md space-y-5 text-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] transition"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF637A] transition"
            />
            <button
              type="submit"
              className="w-full bg-[#FF637A] hover:bg-pink-600 text-white py-3 rounded-xl shadow-md text-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
  