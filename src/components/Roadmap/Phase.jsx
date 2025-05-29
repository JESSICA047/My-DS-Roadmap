import React from "react";
import { Link } from "react-router-dom";
import Month from "./Month";

const Phase = ({ phase, isLast }) => {
  const {
    title,
    period,
    colorFrom,
    colorTo,
    textColor,
    borderColor,
    description,
    months,
  } = phase;

  return (
    <div
      className={`${
        isLast ? "" : "mb-12"
      } roadmap-card bg-white border border-gray-100 rounded-3xl shadow-lg overflow-hidden`}
    >
      <div
        className={`bg-gradient-to-r ${colorFrom} ${colorTo} px-6 py-4 flex items-center justify-between`}
      >
        <h3 className="text-xl md:text-2xl font-bold text-white">
          Phase {phase.id}: {title}
        </h3>
        <span
          className={`px-3 py-1 text-xs font-bold bg-white ${textColor} rounded-full`}
        >
          {period}
        </span>
      </div>{" "}
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <p
            className={`text-gray-600 border-l-4 ${borderColor} pl-4 italic md:flex-1 mb-4 md:mb-0`}
          >
            {description}
          </p>
          <Link
            to="/tracker"
            className={`flex items-center justify-center px-4 py-2 bg-${colorFrom.replace(
              "from-",
              ""
            )} hover:bg-opacity-90 text-white rounded-lg font-medium text-sm transition-all ml-0 md:ml-4 whitespace-nowrap`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
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
