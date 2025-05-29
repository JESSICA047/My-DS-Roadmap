import React, { useState, useEffect } from "react";
import Roadmap from "../components/Roadmap/Roadmap";
import { Link } from "react-router-dom";

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize progress bar with animation
    setTimeout(() => {
      const progressBar = document.getElementById("roadmapProgress");
      if (progressBar) {
        progressBar.style.width = "33%";
        progressBar.style.opacity = "1";
      }
    }, 500);

    // Set up intersection observer for scroll animations
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "animate__animated",
                "animate__fadeIn"
              );
              entry.target.style.opacity = "1";
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((el) => {
        el.style.opacity = "0";
        observer.observe(el);
      });
    };

    animateOnScroll();
  }, []);

  // Function to scroll to roadmap section
  const scrollToRoadmap = () => {
    const roadmapElement = document.getElementById("roadmap");
    if (roadmapElement) {
      roadmapElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div>
        {/* <!-- Navigation Bar --> */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="text-indigo-600 font-bold text-xl">
                  DataScience<span className="text-blue-500">Path</span>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <button
                  onClick={scrollToRoadmap}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Roadmap
                </button>
                <Link
                  to="/linkedin"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  LinkedIn
                </Link>
                <Link
                  to="/tracker"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Start Journey
                </Link>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  id="mobile-menu-button"
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div
            id="mobile-menu"
            className={`md:hidden bg-white border-b border-gray-200 ${
              mobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={scrollToRoadmap}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Roadmap
              </button>
              <Link
                to="/linkedin"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                LinkedIn
              </Link>
              <Link
                to="/tracker"
                className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Start Journey
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* <!-- Hero Section --> */}
          <header className="relative max-w-4xl mx-auto text-center mb-16 animate__animated animate__fadeIn">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl transform -skew-y-2 opacity-70"></div>
            <div className="relative z-10 pt-10 pb-12 px-6">
              <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-600 mb-4 shadow-sm animate__animated animate__fadeInDown">
                June - November 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate__animated animate__fadeInUp">
                Jessica's Path to Becoming a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                  Data Scientist
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                A strategic roadmap focusing on essential skills, hands-on
                projects, and building your professional presence.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/tracker"
                className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5"
              >
                Start Your Journey
              </Link>
              <button className="px-8 py-3 bg-white border border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-medium transition-all hover:-translate-y-0.5">
                Download Roadmap PDF
              </button>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="px-6 pt-6">
                  <div className="progress-container">
                    <div className="progress-bar" id="roadmapProgress"></div>
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Foundation</span>
                    <span>Deep Dive</span>
                    <span>Application</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-gray-200 mt-4">
                  <div className="px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">2</div>
                    <div className="text-xs text-gray-500">
                      Months Foundation
                    </div>
                  </div>
                  <div className="px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-blue-500">2</div>
                    <div className="text-xs text-gray-500">
                      Months Specialization
                    </div>
                  </div>
                  <div className="px-6 py-4 text-center">
                    <div className="text-2xl font-bold text-green-500">2</div>
                    <div className="text-xs text-gray-500">
                      Months Application
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Roadmap Section with ID for scrolling */}
          <div id="roadmap">
            <Roadmap />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
