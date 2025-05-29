import React, { useState } from "react";

const Month = ({ month, isLast }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title, emoji, color } = month;

  // This is a placeholder - in a real implementation, you would pass the actual content
  // for each month from the database or an API
  const getMonthContent = () => {
    return (
      <div className="details-content">
        <h5 className={`font-semibold text-gray-900 mb-2`}>Key Focus Areas:</h5>
        <ul className="space-y-3">
          <li className="flex items-start">
            <div
              className={`mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-${color}-100 flex items-center justify-center`}
            >
              <div className={`w-2 h-2 rounded-full bg-${color}-600`}></div>
            </div>
            <div>
              <span className="font-medium">Sample Focus Area 1</span>
              <ul className="ml-7 mt-1 text-sm text-gray-600 list-disc">
                <li>Sample task or concept to learn</li>
                <li>Another sample task or concept to master</li>
              </ul>
            </div>
          </li>
          <li className="flex items-start">
            <div
              className={`mt-1 mr-2 flex-shrink-0 w-5 h-5 rounded-full bg-${color}-100 flex items-center justify-center`}
            >
              <div className={`w-2 h-2 rounded-full bg-${color}-600`}></div>
            </div>
            <div>
              <span className="font-medium">Sample Focus Area 2</span>
              <ul className="ml-7 mt-1 text-sm text-gray-600 list-disc">
                <li>Sample task or concept to learn</li>
                <li>Another sample task or concept to master</li>
              </ul>
            </div>
          </li>
        </ul>

        <h5
          className={`font-semibold text-gray-900 mt-6 mb-3 flex items-center justify-between`}
        >
          Projects ({month.id.charAt(0).toUpperCase() + month.id.slice(1)}):
          <button
            className={`generate-project-ideas-btn bg-${color}-100 hover:bg-${color}-200 text-${color}-700 text-sm font-medium py-2 px-4 rounded-full transition-all flex items-center gap-2`}
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

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <div className="project-card bg-gray-50 p-5 rounded-xl border border-gray-100">
            <div className="flex items-center mb-3">
              <div
                className={`w-10 h-10 flex-shrink-0 bg-${color}-100 rounded-full flex items-center justify-center text-${color}-600 font-bold mr-3`}
              >
                1
              </div>
              <h6 className="font-bold text-gray-900">Example Project 1</h6>
            </div>
            <div className="pl-13">
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Dataset:</span> Sample dataset
              </div>
              <div className="text-sm text-gray-600 mb-2">
                <span className="font-semibold">Tasks:</span> Sample tasks for
                this project
              </div>
              <div className="flex flex-wrap mt-3">
                <span className="badge bg-blue-50 text-blue-700">Tag 1</span>
                <span className="badge bg-green-50 text-green-700">Tag 2</span>
                <span className="badge bg-purple-50 text-purple-700">
                  Tag 3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <details
      className={`custom-details ${isLast ? "" : "mb-6"}`}
      open={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
    >
      <summary className="bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
        <span className={`text-${color}-600 mr-2`}>{emoji}</span> {title}
      </summary>
      {getMonthContent()}
    </details>
  );
};

export default Month;
