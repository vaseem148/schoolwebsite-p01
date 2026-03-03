import { useEffect, useState } from "react";
import About from "./About";
import VisionMission from "../components/VisionMission"

export default function HeroPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <div className="relative min-h-screen text-white overflow-hidden">

        {/* ================= BACKGROUND IMAGE ================= */}
        <img
          src="/sb.jpg"
          alt="School Campus"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ================= OVERLAY ================= */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

        {/* ================= NAVBAR (FIXED + SLIM) ================= */}
        <nav
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
          `}
        >
          <div className="flex items-center px-6 md:px-12 py-3">

            {/* LOGO */}
            <div className="flex items-center gap-3 backdrop-blur-md bg-black/30 px-3 py-1.5 rounded-xl">
              <div className="w-9 h-9 rounded-full bg-green-700 flex items-center justify-center font-bold text-base">
                IG
              </div>
              <div>
                <h1 className="text-base font-bold text-white drop-shadow-lg">
                  Imam Ghazzali School
                </h1>
                <p className="text-xs text-gray-200 drop-shadow">
                  Lalpettai
                </p>
              </div>
            </div>

            {/* RIGHT NAV */}
            <div className="ml-auto flex items-center gap-8">
              <div className="hidden md:flex gap-8 text-gray-200 text-sm font-medium">
                <a href="#" className="hover:text-yellow-400 transition">Home</a>
                <a href="#" className="hover:text-yellow-400 transition">About</a>
                <a href="#" className="hover:text-yellow-400 transition">Academics</a>
                <a href="#" className="hover:text-yellow-400 transition">Facilities</a>
                <a href="#" className="hover:text-yellow-400 transition">Activities</a>
                <a href="#" className="hover:text-yellow-400 transition">Contact</a>
              </div>

              <button className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-sm font-semibold hover:bg-yellow-300 transition">
                Admissions Open
              </button>
            </div>
          </div>
        </nav>

        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-28">

          <span className="mb-6 px-6 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium backdrop-blur">
            Nurturing Minds, Building Character
          </span>

          <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-xl">
            Where Knowledge <br />
            Meets <span className="text-yellow-400">Wisdom</span>
          </h1>

          <p className="max-w-3xl mt-6 text-gray-200 text-lg drop-shadow">
            Imam Ghazzali School provides a holistic education that blends
            academic excellence with moral values, discipline, and character
            development for a brighter future.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-6">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold hover:bg-yellow-300 transition">
              Admissions Open 2025
            </button>

            <button className="bg-white/90 text-black px-8 py-4 rounded-xl font-semibold hover:bg-white transition">
              Explore Campus
            </button>
          </div>

          {/* STATS */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">25+</h2>
              <p className="mt-2 text-gray-200">Years of Excellence</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">500+</h2>
              <p className="mt-2 text-gray-200">Happy Students</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">30+</h2>
              <p className="mt-2 text-gray-200">Qualified Teachers</p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <About />
      
  );
}
