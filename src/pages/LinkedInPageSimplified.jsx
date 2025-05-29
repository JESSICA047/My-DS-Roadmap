import React, { useState } from "react";
import LinkedInCalendar from "../components/LinkedInCalendar/LinkedInCalendar";
import { Link } from "react-router-dom";

function LinkedInPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("calendar");
  const [copySuccess, setCopySuccess] = useState("");

  // Copy template to clipboard function
  const copyTemplate = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000);
      },
      () => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

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

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-6 md:mb-0">
                  <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    LinkedIn Content Strategy
                  </h1>
                  <p className="text-xl text-indigo-100 max-w-2xl">
                    Build your professional presence and network strategically
                    with these weekly post ideas.
                  </p>

                  {/* Success Metrics Summary */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">4 Weeks</div>
                      <div className="text-xs text-indigo-100">
                        Content Plan
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">12 Posts</div>
                      <div className="text-xs text-indigo-100">
                        Ready to Use
                      </div>
                    </div>
                    <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold">150+</div>
                      <div className="text-xs text-indigo-100">
                        Est. Connections
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab("calendar")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "calendar"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Content Calendar
              </button>
              <button
                onClick={() => setActiveTab("profile")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "profile"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Profile Tips
              </button>
              <button
                onClick={() => setActiveTab("templates")}
                className={`py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === "templates"
                    ? "border-indigo-600 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                Post Templates
              </button>
            </nav>
          </div>

          {/* Tab Content */}
          <div className={activeTab === "calendar" ? "block" : "hidden"}>
            <LinkedInCalendar />
          </div>

          <div className={activeTab === "profile" ? "block" : "hidden"}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-8 sm:p-10 relative">
                  <div
                    className="absolute left-0 top-0 w-full h-40 bg-cover bg-center opacity-10"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
                    }}
                  ></div>

                  <div className="relative">
                    <h2 className="text-xl font-bold text-white sm:text-2xl">
                      Professional LinkedIn Profile Setup
                    </h2>
                    <p className="mt-2 text-white text-opacity-90">
                      Optimize your profile to stand out as a data science
                      professional
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2">
                        Essential Profile Elements
                      </h3>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Professional Headshot
                            </span>
                            <p className="text-sm text-gray-500">
                              Use a high-quality photo with good lighting and a
                              neutral background.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Compelling Headline
                            </span>
                            <p className="text-sm text-gray-500">
                              "Aspiring Data Scientist | Python | SQL | Machine
                              Learning | Seeking opportunities to apply data
                              skills"
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">About Section</span>
                            <p className="text-sm text-gray-500">
                              Tell your story and learning journey, highlighting
                              what makes you unique.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Featured Projects
                            </span>
                            <p className="text-sm text-gray-500">
                              Showcase your data science projects, even if
                              they're learning projects.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 border-b border-gray-200 pb-2">
                        Growth Strategies
                      </h3>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Consistent Engagement
                            </span>
                            <p className="text-sm text-gray-500">
                              Comment on industry posts, share insights, and
                              react to others' content.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Strategic Connections
                            </span>
                            <p className="text-sm text-gray-500">
                              Connect with data scientists, recruiters, and
                              companies you're interested in.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Join Data Science Groups
                            </span>
                            <p className="text-sm text-gray-500">
                              Find communities to learn, share knowledge, and
                              find opportunities.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <span className="flex-shrink-0 h-5 w-5 text-indigo-500 mr-2 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                            </svg>
                          </span>
                          <div>
                            <span className="font-medium">
                              Update Regularly
                            </span>
                            <p className="text-sm text-gray-500">
                              Add new skills, projects, and certificates as you
                              progress.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={activeTab === "templates" ? "block" : "hidden"}>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4">
                  <h2 className="text-xl font-bold text-white">
                    LinkedIn Post Templates
                  </h2>
                  <p className="text-sm text-white text-opacity-90">
                    Ready-to-use templates for different types of posts
                  </p>
                </div>

                <div className="p-6">
                  <div className="space-y-6">
                    {/* Project Showcase Template */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium text-gray-900">
                          Project Showcase
                        </h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                          High Engagement
                        </span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-3">
                        <p className="text-gray-700 whitespace-pre-line">
                          🚀 Excited to share my latest data science project! I
                          built a [type of model] to [solve problem] using
                          [tools/languages]. Key insights: • [Insight 1] •
                          [Insight 2] • [Insight 3] What I learned: [key
                          learning] Check it out here: [link] #DataScience
                          #Portfolio #MachineLearning
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          copyTemplate(`🚀 Excited to share my latest data science project!

I built a [type of model] to [solve problem] using [tools/languages].

Key insights:
• [Insight 1]
• [Insight 2]
• [Insight 3]

What I learned: [key learning]

Check it out here: [link]

#DataScience #Portfolio #MachineLearning`)
                        }
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        </svg>
                        {copySuccess === "Copied!"
                          ? "Copied!"
                          : "Copy Template"}
                      </button>
                    </div>

                    {/* Learning Journey Update */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium text-gray-900">
                          Learning Journey Update
                        </h3>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          Personal Growth
                        </span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-3">
                        <p className="text-gray-700 whitespace-pre-line">
                          📚 Week [X] of my data science journey complete! This
                          week I focused on [topic] and learned: • [Learning 1]
                          • [Learning 2] • [Learning 3] Challenges I overcame:
                          [challenge] Next up: [next topic] What's your
                          experience with [topic]? Any resources to recommend?
                          #DataScience #LearningJourney #[Topic]
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          copyTemplate(`📚 Week [X] of my data science journey complete!

This week I focused on [topic] and learned:
• [Learning 1]
• [Learning 2]
• [Learning 3]

Challenges I overcame: [challenge]

Next up: [next topic]

What's your experience with [topic]? Any resources to recommend?

#DataScience #LearningJourney #[Topic]`)
                        }
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        </svg>
                        {copySuccess === "Copied!"
                          ? "Copied!"
                          : "Copy Template"}
                      </button>
                    </div>

                    {/* Question for Network */}
                    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-medium text-gray-900">
                          Question for Network
                        </h3>
                        <span className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                          Engagement Driver
                        </span>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg mb-3">
                        <p className="text-gray-700 whitespace-pre-line">
                          🤔 Question for my data science network: I'm currently
                          working on [problem/concept] and wondering about
                          [specific question]. My initial approach is
                          [approach], but I'm curious: What strategies have you
                          found effective for [problem/concept]? Any resources
                          or tips would be greatly appreciated! #DataScience
                          #[Topic] #LearningInPublic
                        </p>
                      </div>
                      <button
                        onClick={() =>
                          copyTemplate(`🤔 Question for my data science network:

I'm currently working on [problem/concept] and wondering about [specific question].

My initial approach is [approach], but I'm curious:

What strategies have you found effective for [problem/concept]?

Any resources or tips would be greatly appreciated!

#DataScience #[Topic] #LearningInPublic`)
                        }
                        className="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                          />
                        </svg>
                        {copySuccess === "Copied!"
                          ? "Copied!"
                          : "Copy Template"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LinkedInPage;
