import React, { useState } from "react";
import LinkedInCalendar from "../components/LinkedInCalendar/LinkedInCalendar";
import { Link } from "react-router-dom";

function LinkedInPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* <!-- Navigation Bar --> */}
        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="text-indigo-600 font-bold text-xl">
                  DataScience<span className="text-blue-500">Path</span>
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-6">
                <Link
                  to="/#roadmap"
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  Roadmap
                </Link>
                <Link
                  to="/linkedin"
                  className="text-indigo-600 border-b-2 border-indigo-600 px-3 py-2 text-sm font-medium"
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
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
              >
                Roadmap
              </Link>
              <Link
                to="/linkedin"
                className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
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
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              LinkedIn Content Strategy
            </h1>
            <p className="text-lg text-gray-600">
              Build your professional presence and network strategically with
              these weekly post ideas.
            </p>
          </div>

          <LinkedInCalendar />

          <div className="mt-12 max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              LinkedIn Profile Tips
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">
                  ✓
                </span>
                <span>
                  Use a professional headshot and background image related to
                  data science
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">
                  ✓
                </span>
                <span>
                  Create a headline that mentions "Aspiring Data Scientist" and
                  your current focus area
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">
                  ✓
                </span>
                <span>
                  Write an "About" section that tells your data science story
                  and learning journey
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">
                  ✓
                </span>
                <span>
                  List relevant skills including Python, SQL, Statistics, and
                  Machine Learning
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2">
                  ✓
                </span>
                <span>
                  Follow key data science influencers and organizations
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinkedInPage;
