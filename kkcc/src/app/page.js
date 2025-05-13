import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F1EFE7] text-black">
      {/* Header */}
      <header className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-black rounded-full"></div>
          <div className="text-xl font-bold">KKC Classroom</div>
        </div>
        <nav className="flex gap-4">
          <button className="text-black px-4 py-2 rounded border border-black hover:bg-black hover:text-white">Login</button>
          <button className="bg-[#FF637A] text-white px-4 py-2 rounded font-semibold hover:bg-pink-500">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-4 py-10 gap-6">
        {/* Main Slogan */}
        <h1 className="text-3xl sm:text-5xl font-bold max-w-2xl leading-tight">
          Learn Finance & Consulting for Free. <br /> Forever. Everywhere.
        </h1>

        {/* Dropdown and Button */}
        <div className="flex flex-col sm:flex-row gap-4 items-center bg-white px-6 py-4 rounded shadow mt-4">
          <label className="text-black text-sm">I want to learn...</label>
          <select className="border px-4 py-2 rounded text-black">
            <option>Consulting</option>
            <option>Finance</option>
          </select>
          <button className="bg-[#FF637A] text-white px-6 py-2 rounded hover:bg-pink-500 font-semibold">Start Learning</button>
        </div>

        {/* Mascot / Illustration Placeholder */}
        <div className="w-48 h-48 bg-black rounded-full shadow mt-6 flex items-center justify-center text-white">
          I'm GUI 👋
        </div>

        {/* Partner Logos and Support */}
        <div className="text-sm text-black mt-6">
          <p>Compiled with the help of...</p>
          <div className="w-80 h-24 bg-white text-black rounded shadow flex items-center justify-center my-2">
            <span>Famous Consulting & Banking/Finance Firms</span>
          </div>
        </div>

        {/* Association Banner */}
        <div className="bg-white w-full py-4 px-6 text-center text-sm text-black font-medium mt-4">
          In Association with KKC Consultants
        </div>

        {/* Subheader and Description */}
        <div className="max-w-xl text-center mt-6">
          <h2 className="text-xl font-semibold">
            The <span className="underline">Simplest</span> way to <span className="underline">Master</span> Consulting & Finance
          </h2>
          <p className="text-sm text-black/80 mt-2">
            Learning with KKC Classroom is engaging. We have structured content from the best firms and educators to help you grow.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white p-4 text-center text-sm">
        © {new Date().getFullYear()} KKC Classroom. All rights reserved.
      </footer>
    </div>
  );
}
