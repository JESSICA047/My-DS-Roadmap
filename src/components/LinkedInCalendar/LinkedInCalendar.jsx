import React, { useState } from "react";
import MonthlyPostIdeas from "./MonthlyPostIdeasSimplified";

const LinkedInCalendar = () => {
  // LinkedIn post data by month with added difficulty and hashtags
  const monthlyPostData = {
    June: [
      {
        week: "W1",
        title: "Starting my data science journey!",
        description:
          "Kicking off with Python and NumPy. Any tips for a beginner?",
        icon: "📊",
        difficulty: "easy",
        hashtags: ["DataScience", "LearningJourney", "Python", "NumPy"],
        bestTimeToPost: "Tuesday 9am",
      },
      {
        week: "W2",
        title: "Deep dive into Pandas!",
        description:
          "Data cleaning and manipulation are surprisingly fun. What's your favorite Pandas trick?",
        icon: "🐼",
        difficulty: "medium",
        hashtags: ["DataScience", "Pandas", "DataCleaning", "DataManipulation"],
        bestTimeToPost: "Wednesday 12pm",
      },
      {
        week: "W3",
        title: "Visualizing data with Matplotlib & Seaborn!",
        description:
          "A picture truly tells a thousand words. #DataVisualization #Python",
        icon: "📈",
        difficulty: "medium",
        hashtags: ["DataVisualization", "Python", "Matplotlib", "Seaborn"],
        bestTimeToPost: "Thursday 4pm",
      },
      {
        week: "W4",
        title: "Cracking the code with SQL!",
        description:
          "Learning how to query databases effectively. Any go-to SQL resources?",
        icon: "🔍",
        difficulty: "hard",
        hashtags: ["SQL", "Database", "DataScience", "LearningJourney"],
        bestTimeToPost: "Monday 10am",
      },
    ],
    July: [
      {
        week: "W1",
        title: "Understanding statistics for data science!",
        description:
          "Diving into descriptive stats and probability distributions this week.",
        icon: "📏",
        difficulty: "medium",
        hashtags: ["Statistics", "DataScience", "ProbabilityTheory"],
        bestTimeToPost: "Tuesday 2pm",
      },
      {
        week: "W2",
        title: "P-values and Hypothesis Testing",
        description:
          "Finally understanding what statistical significance really means!",
        icon: "🧪",
        difficulty: "hard",
        hashtags: ["Statistics", "HypothesisTesting", "DataScience", "PValue"],
        bestTimeToPost: "Wednesday 9am",
      },
      {
        week: "W3",
        title: "First ML model built!",
        description:
          "Created my first linear regression model. Small steps toward big goals.",
        icon: "🤖",
        difficulty: "important",
        hashtags: [
          "MachineLearning",
          "LinearRegression",
          "DataScience",
          "Milestone",
        ],
        bestTimeToPost: "Thursday 1pm",
      },
      {
        week: "W4",
        title: "Learning Git & GitHub",
        description:
          "Version control is a game-changer for my data science projects.",
        icon: "🔄",
        difficulty: "easy",
        hashtags: ["Git", "GitHub", "VersionControl", "DataScience"],
        bestTimeToPost: "Friday 3pm",
      },
    ],
    August: [
      {
        week: "W1",
        title: "Understanding Decision Trees",
        description:
          "Exploring how decision trees split data for classification and regression tasks.",
        icon: "🌲",
        difficulty: "medium",
        hashtags: ["MachineLearning", "DecisionTrees", "DataScience"],
        bestTimeToPost: "Monday 11am",
      },
      {
        week: "W2",
        title: "Portfolio Project Halfway Done!",
        description:
          "Making great progress on my customer churn prediction project. Excited to share insights soon!",
        icon: "🚀",
        difficulty: "important",
        hashtags: [
          "Portfolio",
          "DataScienceProject",
          "MachineLearning",
          "CustomerChurn",
        ],
        bestTimeToPost: "Wednesday 2pm",
      },
    ],
  };
  // Trending topics in data science
  const trendingTopics = [
    { name: "Large Language Models", growth: "+143%", tag: "AI" },
    { name: "Data Ethics", growth: "+87%", tag: "Ethics" },
    { name: "MLOps", growth: "+65%", tag: "DevOps" },
    { name: "Time Series Forecasting", growth: "+52%", tag: "Analytics" },
    { name: "Computer Vision", growth: "+48%", tag: "AI" },
  ];

  // Month filter function
  const [activeMonth, setActiveMonth] = useState("all");

  // Filter posts based on selected month
  const filteredMonths =
    activeMonth === "all"
      ? Object.entries(monthlyPostData)
      : Object.entries(monthlyPostData).filter(
          ([month]) => month === activeMonth
        );

  return (
    <section id="linkedin" className="py-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full uppercase tracking-wider">
            Professional Presence
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            LinkedIn Content Calendar
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            Weekly suggestions to build your professional network and showcase
            your progress
          </p>

          {/* Month Filter Tabs */}
          <div className="flex justify-center mt-6 space-x-1">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeMonth === "all"
                  ? "bg-indigo-100 text-indigo-700"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
              onClick={() => setActiveMonth("all")}
            >
              All Months
            </button>
            {Object.keys(monthlyPostData).map((month) => (
              <button
                key={month}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeMonth === month
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-indigo-600"
                }`}
                onClick={() => setActiveMonth(month)}
              >
                {month}
              </button>
            ))}
          </div>
        </div>

        {/* Content Strategy Overview Section */}
        <div className="mb-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Content Strategy
              </h3>
              <p className="text-gray-600 text-sm">
                Consistent LinkedIn posting helps establish your professional
                brand, demonstrates your knowledge, and builds connections in
                the data science community.
              </p>
              <div className="mt-4 flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <span className="ml-2 text-xs text-gray-500">30% Complete</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posting Schedule
              </h3>
              <div className="flex justify-between text-sm text-gray-600">
                <div className="bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Best: Tue/Wed
                </div>
                <div className="bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  9am-2pm
                </div>
                <div className="bg-white px-3 py-2 rounded-lg border border-gray-100 shadow-sm flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
                      clipRule="evenodd"
                    />
                  </svg>
                  1-2x Weekly
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Success Metrics
              </h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                  <div className="text-2xl font-bold text-indigo-600">150+</div>
                  <div className="text-xs text-gray-500">Connections</div>
                </div>
                <div className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm text-center">
                  <div className="text-2xl font-bold text-indigo-600">20%</div>
                  <div className="text-xs text-gray-500">Engagement Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Calendar */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMonths.map(([month, posts]) => (
                <MonthlyPostIdeas key={month} month={month} posts={posts} />
              ))}
            </div>
          </div>

          {/* Sidebar with Trending Topics */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-full">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
                <h4 className="text-xl font-bold text-white flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Trending Data Science Topics
                </h4>
                <p className="text-sm text-white text-opacity-90">
                  Keep your posts relevant with these trending topics
                </p>
              </div>

              <div className="p-6">
                <ul className="divide-y divide-gray-100">
                  {trendingTopics.map((topic, index) => (
                    <li
                      key={index}
                      className="py-3 flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <span
                          className={`inline-block w-2 h-2 rounded-full mr-3 ${
                            index < 2
                              ? "bg-red-500"
                              : index < 4
                              ? "bg-amber-500"
                              : "bg-green-500"
                          }`}
                        ></span>
                        <span className="text-gray-900 font-medium">
                          {topic.name}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 text-sm font-semibold mr-2">
                          {topic.growth}
                        </span>
                        <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          #{topic.tag}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-gray-100 pt-4">
                  <h5 className="font-medium text-gray-900 mb-2">
                    How to use trending topics:
                  </h5>
                  <ol className="text-sm text-gray-600 space-y-2 list-decimal pl-5">
                    <li>Include relevant hashtags in your posts</li>
                    <li>Share your perspective on trending technologies</li>
                    <li>
                      Create content that connects to trending conversations
                    </li>
                  </ol>
                </div>

                <div className="mt-4">
                  <button className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    Share These Insights
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInCalendar;
