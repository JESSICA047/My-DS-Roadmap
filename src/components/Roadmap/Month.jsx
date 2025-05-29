import React, { useState } from "react";

const Month = ({ month, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, emoji, color } = month;

  // Function to get proper classes based on color
  const getColorClasses = () => {
    switch (color) {
      case "indigo":
        return {
          text: "text-indigo-600",
          bg: "bg-indigo-600",
          bgLight: "bg-indigo-50",
          bgMedium: "bg-indigo-100",
          border: "border-indigo-100",
          shadow: "shadow-indigo-100",
          hover: "hover:bg-indigo-100",
          focusArea: {
            border: "border-indigo-200",
            bg: "bg-indigo-50",
            icon: "text-indigo-600",
          },
          button: {
            bg: "bg-indigo-100",
            hover: "hover:bg-indigo-200",
            text: "text-indigo-700",
          },
          project: {
            bg: "bg-indigo-50",
            border: "border-indigo-100",
            badgeBg: "bg-indigo-100",
            badgeText: "text-indigo-700",
          },
        };
      case "blue":
        return {
          text: "text-blue-600",
          bg: "bg-blue-600",
          bgLight: "bg-blue-50",
          bgMedium: "bg-blue-100",
          border: "border-blue-100",
          shadow: "shadow-blue-100",
          hover: "hover:bg-blue-100",
          focusArea: {
            border: "border-blue-200",
            bg: "bg-blue-50",
            icon: "text-blue-600",
          },
          button: {
            bg: "bg-blue-100",
            hover: "hover:bg-blue-200",
            text: "text-blue-700",
          },
          project: {
            bg: "bg-blue-50",
            border: "border-blue-100",
            badgeBg: "bg-blue-100",
            badgeText: "text-blue-700",
          },
        };
      case "purple":
      default:
        return {
          text: "text-purple-600",
          bg: "bg-purple-600",
          bgLight: "bg-purple-50",
          bgMedium: "bg-purple-100",
          border: "border-purple-100",
          shadow: "shadow-purple-100",
          hover: "hover:bg-purple-100",
          focusArea: {
            border: "border-purple-200",
            bg: "bg-purple-50",
            icon: "text-purple-600",
          },
          button: {
            bg: "bg-purple-100",
            hover: "hover:bg-purple-200",
            text: "text-purple-700",
          },
          project: {
            bg: "bg-purple-50",
            border: "border-purple-100",
            badgeBg: "bg-purple-100",
            badgeText: "text-purple-700",
          },
        };
    }
  };

  const colorClasses = getColorClasses();

  // This is a placeholder - in a real implementation, you would pass the actual content
  // for each month from the database or an API
  const getMonthContent = () => {
    return (
      <div className="details-content p-6 pt-3 bg-white rounded-b-xl border border-t-0 border-gray-100 shadow-inner animate__animated animate__fadeIn">
        {/* Module Overview */}
        <div className="mb-8 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${colorClasses.text} mr-2`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Learning Schedule:
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div
              className={`p-3 ${colorClasses.bgLight} rounded-lg border ${colorClasses.border}`}
            >
              <div className="text-sm font-medium text-gray-500">Duration</div>
              <div className="font-semibold text-gray-900">4 weeks</div>
            </div>
            <div
              className={`p-3 ${colorClasses.bgLight} rounded-lg border ${colorClasses.border}`}
            >
              <div className="text-sm font-medium text-gray-500">Effort</div>
              <div className="font-semibold text-gray-900">20 hrs/week</div>
            </div>
            <div
              className={`p-3 ${colorClasses.bgLight} rounded-lg border ${colorClasses.border}`}
            >
              <div className="text-sm font-medium text-gray-500">Projects</div>
              <div className="font-semibold text-gray-900">4 mini, 1 major</div>
            </div>
            <div
              className={`p-3 ${colorClasses.bgLight} rounded-lg border ${colorClasses.border}`}
            >
              <div className="text-sm font-medium text-gray-500">
                Assessments
              </div>
              <div className="font-semibold text-gray-900">2 quizzes</div>
            </div>
          </div>
        </div>

        {/* Key Focus Areas */}
        <h5 className={`font-semibold text-gray-900 mb-4 flex items-center`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${colorClasses.text} mr-2`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
              clipRule="evenodd"
            />
          </svg>
          Key Focus Areas:
        </h5>
        <ul className="space-y-4">
          <li
            className={`flex items-start p-4 rounded-xl ${colorClasses.focusArea.bg} border ${colorClasses.focusArea.border}`}
          >
            <div
              className={`mt-1 mr-3 flex-shrink-0 w-8 h-8 rounded-lg ${colorClasses.bgMedium} flex items-center justify-center ${colorClasses.shadow}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${colorClasses.focusArea.icon}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <span className="font-medium text-gray-900">
                Programming Fundamentals
              </span>
              <ul className="ml-6 mt-2 text-sm text-gray-600 space-y-1.5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Python data structures & algorithms
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Function optimization & error handling
                </li>
              </ul>
            </div>
          </li>
          <li
            className={`flex items-start p-4 rounded-xl ${colorClasses.focusArea.bg} border ${colorClasses.focusArea.border}`}
          >
            <div
              className={`mt-1 mr-3 flex-shrink-0 w-8 h-8 rounded-lg ${colorClasses.bgMedium} flex items-center justify-center ${colorClasses.shadow}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${colorClasses.focusArea.icon}`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
            </div>
            <div>
              <span className="font-medium text-gray-900">
                Data Manipulation
              </span>
              <ul className="ml-6 mt-2 text-sm text-gray-600 space-y-1.5">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  NumPy & pandas for data analysis
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-1 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Data cleaning & transformation techniques
                </li>
              </ul>
            </div>
          </li>
        </ul>

        {/* Projects */}
        <div className="mt-8">
          <h5 className="font-semibold text-gray-900 mb-4 flex items-center justify-between">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ${colorClasses.text} mr-2`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
              </svg>
              Projects ({month.id.charAt(0).toUpperCase() + month.id.slice(1)}):
            </div>
            <button
              className={`${colorClasses.button.bg} ${colorClasses.button.hover} ${colorClasses.button.text} text-sm font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2`}
              data-month={month.id}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              Generate Ideas
            </button>
          </h5>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div
              className={`project-card ${colorClasses.project.bg} p-6 rounded-xl border ${colorClasses.project.border} hover:shadow-md transition-shadow transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-10 h-10 flex-shrink-0 ${colorClasses.bgMedium} rounded-lg flex items-center justify-center ${colorClasses.text} font-bold mr-3 shadow-sm`}
                >
                  1
                </div>
                <h6 className="font-bold text-gray-900">Sales Data Analysis</h6>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-3">
                  Analyze an e-commerce dataset to extract customer insights and
                  sales trends using pandas and visualization libraries.
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Dataset:</span> E-commerce
                    sales
                  </div>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Difficulty:</span> Beginner
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    Pandas
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    Data Viz
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    Reporting
                  </span>
                </div>
              </div>
            </div>

            <div
              className={`project-card ${colorClasses.project.bg} p-6 rounded-xl border ${colorClasses.project.border} hover:shadow-md transition-shadow transform hover:-translate-y-1`}
            >
              <div className="flex items-center mb-3">
                <div
                  className={`w-10 h-10 flex-shrink-0 ${colorClasses.bgMedium} rounded-lg flex items-center justify-center ${colorClasses.text} font-bold mr-3 shadow-sm`}
                >
                  2
                </div>
                <h6 className="font-bold text-gray-900">
                  Time Series Forecasting
                </h6>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-3">
                  Build models to predict future values based on historical time
                  series data using statistical methods.
                </div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Dataset:</span> Stock prices
                  </div>
                  <div className="text-xs text-gray-500">
                    <span className="font-semibold">Difficulty:</span>{" "}
                    Intermediate
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    Stats
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    NumPy
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${colorClasses.project.badgeBg} ${colorClasses.project.badgeText}`}
                  >
                    Forecasting
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
          <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${colorClasses.text} mr-2`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            Recommended Resources:
          </h5>
          <ul className="divide-y divide-gray-100">
            <li className="py-2 flex items-center">
              <span
                className={`w-6 h-6 rounded-full ${colorClasses.bgMedium} flex items-center justify-center mr-3 text-xs font-medium ${colorClasses.text}`}
              >
                1
              </span>
              <span className="font-medium text-gray-800">
                Python for Data Science Handbook
              </span>
              <span className="ml-auto text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">
                Book
              </span>
            </li>
            <li className="py-2 flex items-center">
              <span
                className={`w-6 h-6 rounded-full ${colorClasses.bgMedium} flex items-center justify-center mr-3 text-xs font-medium ${colorClasses.text}`}
              >
                2
              </span>
              <span className="font-medium text-gray-800">
                Kaggle Pandas Tutorial
              </span>
              <span className="ml-auto text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                Tutorial
              </span>
            </li>
            <li className="py-2 flex items-center">
              <span
                className={`w-6 h-6 rounded-full ${colorClasses.bgMedium} flex items-center justify-center mr-3 text-xs font-medium ${colorClasses.text}`}
              >
                3
              </span>
              <span className="font-medium text-gray-800">
                Data Visualization with Matplotlib
              </span>
              <span className="ml-auto text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded-full">
                Online Course
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className={`${isLast ? "" : "mb-8"}`}>
      <details
        className={`group custom-details border border-gray-100 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
        open={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <summary className="bg-white hover:bg-gray-50 transition-colors cursor-pointer p-5 rounded-xl flex items-center justify-between">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full ${colorClasses.bgMedium} flex items-center justify-center mr-4 shadow-sm ${colorClasses.text} text-xl`}
            >
              {emoji}
            </div>
            <span className="font-medium text-gray-900">{title}</span>
          </div>
          <div className="flex items-center">
            <span
              className={`mr-4 px-3 py-1 rounded-full text-xs ${colorClasses.bgLight} ${colorClasses.text}`}
            >
              4 weeks
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </summary>
        {getMonthContent()}
      </details>
    </div>
  );
};

export default Month;
