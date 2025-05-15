export default function HelpSupport() {
    return (
      <div className="min-h-screen bg-[#F1EFE7] text-[#000] font-sans px-6 py-12 flex flex-col items-center space-y-12 relative overflow-hidden">
        {/* Title and Subheader */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold underline decoration-[#FF637A] underline-offset-8">Help & Support</h1>
          <p className="text-lg text-gray-700">How can we assist you?</p>
        </div>
  
        {/* Search Box */}
        <div className="w-full max-w-xl">
          <input
            type="text"
            placeholder="Search help topics, FAQs, or features..."
            className="w-full px-6 py-4 rounded-2xl shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF637A]"
          />
        </div>
  
        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl w-full">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Contact Support</h3>
            <p className="text-gray-600">Reach out directly to our team for personalized assistance.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Community Forum</h3>
            <p className="text-gray-600">Join discussions and learn from other candidates and professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">Knowledge Base</h3>
            <p className="text-gray-600">Browse guides, interview tips, resume templates, and FAQs.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
            <h3 className="text-xl font-semibold text-[#FF637A] mb-2">1:1 Coaching</h3>
            <p className="text-gray-600">Schedule a session with an ex-consultant or banker for strategy, resume, or interview prep.</p>
          </div>
        </div>
  
        {/* Resource Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-12">
          <div className="bg-[#FF637A]/10 border-l-4 border-[#FF637A] p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Top Articles</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>How to break into consulting with a non-target degree</li>
              <li>Investment banking resume checklist</li>
              <li>Why fit answers that actually impress</li>
            </ul>
          </div>
          <div className="bg-[#FF637A]/10 border-l-4 border-[#FF637A] p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Interview Prep Hub</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Market sizing drills</li>
              <li>Behavioral frameworks</li>
              <li>Live case study examples</li>
            </ul>
          </div>
          <div className="bg-[#FF637A]/10 border-l-4 border-[#FF637A] p-5 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Request a coaching session</li>
              <li>Browse upcoming webinars</li>
              <li>Check application deadlines</li>
            </ul>
          </div>
        </div>
  
        {/* Call to Action */}
        <div className="text-center space-y-4 pt-16">
          <p className="text-lg text-gray-800">Still need help?</p>
          <button className="bg-[#FF637A] hover:bg-pink-600 text-white px-8 py-3 rounded-xl shadow-md text-lg font-medium transition">
            Get in Touch
          </button>
        </div>
  
        {/* Decorative Gradient Overlay */}
        <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-br from-[#FF637A]/5 via-[#F1EFE7]/50 to-white" />
      </div>
    );
  }
  