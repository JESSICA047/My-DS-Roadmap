import React from "react";
import MonthlyPostIdeas from "./MonthlyPostIdeas";

const LinkedInCalendar = () => {
  // LinkedIn post data by month
  const monthlyPostData = {
    June: [
      {
        week: "W1",
        title: "Starting my data science journey!",
        description:
          "Kicking off with Python and NumPy. Any tips for a beginner?",
        icon: "📊",
      },
      {
        week: "W2",
        title: "Deep dive into Pandas!",
        description:
          "Data cleaning and manipulation are surprisingly fun. What's your favorite Pandas trick?",
        icon: "🐼",
      },
      {
        week: "W3",
        title: "Visualizing data with Matplotlib & Seaborn!",
        description:
          "A picture truly tells a thousand words. #DataVisualization #Python",
        icon: "📈",
      },
      {
        week: "W4",
        title: "Cracking the code with SQL!",
        description:
          "Learning how to query databases effectively. Any go-to SQL resources?",
        icon: "🔍",
      },
    ],
    July: [
      {
        week: "W1",
        title: "Understanding statistics for data science!",
        description:
          "Diving into descriptive stats and probability distributions this week.",
      },
      {
        week: "W2",
        title: "P-values and Hypothesis Testing",
        description:
          "Finally understanding what statistical significance really means!",
      },
      {
        week: "W3",
        title: "First ML model built!",
        description:
          "Created my first linear regression model. Small steps toward big goals.",
      },
      {
        week: "W4",
        title: "Learning Git & GitHub",
        description:
          "Version control is a game-changer for my data science projects.",
      },
    ],
  };

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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(monthlyPostData).map(([month, posts]) => (
            <MonthlyPostIdeas key={month} month={month} posts={posts} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinkedInCalendar;
