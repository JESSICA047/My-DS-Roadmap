import React from "react";
import { Link } from "react-router-dom";
import Month from "./Month";

const Phase = ({ phase }) => {
  const {
    title,
    period,
    colorFrom,
    colorTo,
    description,
    months,
  } = phase;

  // Function to get text and background colors based on the phase color
  const getColors = () => {
    if (colorFrom.includes("indigo")) {
      return {
        bg: "bg-indigo-600",
        bgHover: "hover:bg-indigo-700",
        bgLight: "bg-indigo-50",
        text: "text-indigo-600",
        iconBg: "bg-indigo-100",
        shadow: "shadow-indigo-100",
        border: "border-indigo-100",
      };
    } else if (colorFrom.includes("blue")) {
      return {
        bg: "bg-blue-600",
        bgHover: "hover:bg-blue-700",
        bgLight: "bg-blue-50",
        text: "text-blue-600",
        iconBg: "bg-blue-100",
        shadow: "shadow-blue-100",
        border: "border-blue-100",
      };
    } else {
      return {
        bg: "bg-purple-600",
        bgHover: "hover:bg-purple-700",
        bgLight: "bg-purple-50",
        text: "text-purple-600",
        iconBg: "bg-purple-100",
        shadow: "shadow-purple-100",
        border: "border-purple-100",
      };
    }
  };

  const colors = getColors();

  return (
    <div
      className={`roadmap-card transform hover:translate-y-[-5px] transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden`}
    >
      <div
        className={`relative bg-gradient-to-r ${colorFrom} ${colorTo} px-6 py-12`}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-10 right-10 w-3 h-3 bg-white/30 rounded-full"></div>
        <div className="absolute top-20 right-20 w-5 h-5 bg-white/20 rounded-full"></div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between relative z-10">
          <div>
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mr-4 backdrop-blur-sm">
                <span className="text-white text-xl font-bold">{phase.id}</span>
              </div>
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 text-white rounded-full mb-2 backdrop-blur-sm">
                  {period}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {title}
                </h3>
              </div>
            </div>

            <div className="mt-4 text-white/90 max-w-3xl text-lg">
              {description}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {months.map((month) => (
                <span
                  key={month.id}
                  className="inline-flex items-center px-4 py-1.5 bg-white/20 text-white rounded-full text-sm backdrop-blur-sm"
                >
                  {month.emoji}{" "}
                  {month.id.charAt(0).toUpperCase() + month.id.slice(1)}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 md:mt-0 md:ml-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
              <div className="text-white text-opacity-90">
                Skills you'll gain:
              </div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-sm">
                  Python
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-sm">
                  Data Analysis
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-sm">
                  Machine Learning
                </span>
                {phase.id === 2 && (
                  <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-sm">
                    Deep Learning
                  </span>
                )}
                {phase.id === 3 && (
                  <span className="px-2 py-1 bg-white/10 rounded-lg text-white text-sm">
                    Deployment
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 bg-gradient-to-r from-gray-50 to-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="grid grid-cols-2 gap-6 mb-6 md:mb-0 md:mr-6">
            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center mr-4 ${colors.shadow}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${colors.text}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium text-gray-900">2 months</p>
              </div>
            </div>

            <div className="flex items-center">
              <div
                className={`w-12 h-12 rounded-full ${colors.iconBg} flex items-center justify-center mr-4 ${colors.shadow}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${colors.text}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Difficulty</p>
                <p className="font-medium text-gray-900">
                  {phase.id === 1
                    ? "Beginner"
                    : phase.id === 2
                    ? "Intermediate"
                    : "Advanced"}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/tracker"
            className={`flex items-center justify-center px-6 py-3 ${colors.bg} ${colors.bgHover} hover:shadow-lg text-white rounded-lg font-medium text-sm transition-all`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Track Progress
          </Link>
        </div>

        {months.map((month, index) => (
          <Month
            key={month.id}
            month={month}
            isLast={index === months.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Phase;
