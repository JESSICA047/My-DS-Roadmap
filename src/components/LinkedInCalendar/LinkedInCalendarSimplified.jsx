import React, { useState } from "react";
import MonthlyPostIdeas from "./MonthlyPostIdeas";

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

        <div className="grid grid-cols-1 gap-6">
          {/* Main Content Calendar */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredMonths.map(([month, posts]) => (
                <MonthlyPostIdeas key={month} month={month} posts={posts} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkedInCalendar;
