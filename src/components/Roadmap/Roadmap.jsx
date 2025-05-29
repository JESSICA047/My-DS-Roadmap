import React from "react";
import Phase from "./Phase";

const Roadmap = () => {
  const phases = [
    {
      id: 1,
      title: "Foundations",
      period: "JUNE - JULY",
      colorFrom: "from-indigo-600",
      colorTo: "to-indigo-400",
      textColor: "text-indigo-700",
      borderColor: "border-indigo-300",
      description:
        "Build a strong theoretical and practical foundation in core data science tools and concepts.",
      months: [
        {
          id: "june",
          title: "June 2025: Python & Data Manipulation",
          emoji: "📊",
          color: "indigo",
        },
        {
          id: "july",
          title: "July 2025: Statistics, Probability & ML Fundamentals",
          emoji: "📈",
          color: "indigo",
        },
      ],
    },
    {
      id: 2,
      title: "Deep Dive & Specialization",
      period: "AUG - SEP",
      colorFrom: "from-blue-600",
      colorTo: "to-blue-400",
      textColor: "text-blue-700",
      borderColor: "border-blue-300",
      description:
        "Explore more advanced ML algorithms, deep learning basics, and foundational cloud/big data concepts.",
      months: [
        {
          id: "august",
          title: "August 2025: Advanced ML & Ensemble Methods",
          emoji: "🔍",
          color: "blue",
        },
        {
          id: "september",
          title: "September 2025: Deep Learning & Cloud/Big Data Basics",
          emoji: "🧠",
          color: "blue",
        },
      ],
    },
    {
      id: 3,
      title: "Application & Portfolio Building",
      period: "OCT - NOV",
      colorFrom: "from-purple-600",
      colorTo: "to-purple-400",
      textColor: "text-purple-700",
      borderColor: "border-purple-300",
      description:
        "Consolidate knowledge with end-to-end projects, focus on deployment basics, and prepare for job applications.",
      months: [
        {
          id: "october",
          title: "October 2025: End-to-End Project & Deployment",
          emoji: "🚀",
          color: "purple",
        },
        {
          id: "november",
          title: "November 2025: Advanced Topics, Interview Prep & Networking",
          emoji: "🏁",
          color: "purple",
        },
      ],
    },
  ];
  return (
    <section
      id="roadmap"
      className="py-20 scroll-mt-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full uppercase tracking-wider">
            Your Learning Journey
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900 sm:text-5xl">
            Data Scientist Roadmap
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500">
            A comprehensive guide to transform you from beginner to job-ready
            data scientist
          </p>

          {/* Visual Timeline Indicator */}
          <div className="max-w-4xl mx-auto mt-12 relative">
            <div className="h-2 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded-full shadow-inner">
              <div
                className="h-2 bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 rounded-full w-0 opacity-0 transition-all duration-1000 ease-out shadow-lg"
                id="roadmapProgress"
              ></div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-indigo-600 mb-2 shadow-md shadow-indigo-200"></div>
                <div className="text-sm font-medium text-gray-700">
                  June 2025
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-blue-600 mb-2 shadow-md shadow-blue-200"></div>
                <div className="text-sm font-medium text-gray-700">
                  September 2025
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-5 h-5 rounded-full bg-purple-600 mb-2 shadow-md shadow-purple-200"></div>
                <div className="text-sm font-medium text-gray-700">
                  December 2025
                </div>
              </div>
            </div>
          </div>

          {/* Featured Stats */}
          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform hover:shadow-lg">
              <div className="text-3xl font-bold text-indigo-600">6</div>
              <div className="text-sm text-gray-600">Total Months</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform hover:shadow-lg">
              <div className="text-3xl font-bold text-blue-600">3</div>
              <div className="text-sm text-gray-600">Learning Phases</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform hover:shadow-lg">
              <div className="text-3xl font-bold text-purple-600">24+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100 transform hover:scale-105 transition-transform hover:shadow-lg">
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Job-Ready Skills</div>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {phases.map((phase, index) => (
            <Phase
              key={phase.id}
              phase={phase}
              isLast={index === phases.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
