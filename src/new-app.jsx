import React, { useState, useEffect } from "react";
import Roadmap from "./components/Roadmap/Roadmap";
import LinkedInCalendar from "./components/LinkedInCalendar/LinkedInCalendar";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Initialize progress bar with animation
    setTimeout(() => {
      const progressBar = document.getElementById("roadmapProgress");
      if (progressBar) {
        progressBar.style.width = "33%";
      }
    }, 500);

    // Set up animation for elements when they enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate__animated", "animate__fadeIn");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Apply to all elements with .animate-on-scroll class
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="sticky top-0 bg-white shadow-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-primary-500 font-bold text-xl">
                DataScience<span className="text-blue-500">Path</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#roadmap"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Roadmap
              </a>
              <a
                href="#linkedin"
                className="text-gray-600 hover:text-primary-500 px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a href="#" className="btn-primary">
                Get Started
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
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

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            mobileMenuOpen ? "block" : "hidden"
          } bg-white border-b border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#roadmap"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
            >
              Roadmap
            </a>
            <a
              href="#linkedin"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary-500 text-white hover:bg-primary-600"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <header className="relative max-w-4xl mx-auto text-center mb-16 animate__animated animate__fadeIn">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-white to-blue-50 rounded-3xl transform -rotate-1 opacity-70"></div>
          <div className="relative z-10 pt-10 pb-12 px-6">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold bg-primary-50 text-primary-600 mb-4 shadow-sm animate__animated animate__fadeInDown">
              June - November 2025
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 animate__animated animate__fadeInUp">
              Your Path to Becoming a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-500">
                Data Scientist
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeInUp animate__delay-1s">
              A strategic roadmap focusing on essential skills, hands-on
              projects, and building your professional presence.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary animate__animated animate__fadeInUp animate__delay-1s">
              Start Your Journey
            </button>
            <button className="btn-secondary animate__animated animate__fadeInUp animate__delay-1s">
              Download Roadmap PDF
            </button>
          </div>

          {/* Progress Card */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="card">
              <div className="px-6 pt-6">
                <div className="progress-bar-container">
                  <div className="progress-bar" id="roadmapProgress"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>Foundation</span>
                  <span>Deep Dive</span>
                  <span>Application</span>
                </div>
              </div>
              <div className="grid grid-cols-3 divide-x divide-gray-200 mt-4">
                <div className="px-6 py-4 text-center">
                  <div className="text-2xl font-bold text-primary-500">2</div>
                  <div className="text-xs text-gray-500">Months Foundation</div>
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

        {/* Roadmap Section */}
        <Roadmap />

        {/* LinkedIn Calendar Section */}
        <LinkedInCalendar />
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="text-xl font-bold mb-4">DataSciencePath</div>
              <p className="text-gray-300 max-w-md">
                Your complete guide to becoming a data science professional
                through structured learning.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Resources
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      LinkedIn Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Projects
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Learning
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Python
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Data Analysis
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Machine Learning
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                  Contact
                </h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Email
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-300 hover:text-white">
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              © 2025 DataSciencePath. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
