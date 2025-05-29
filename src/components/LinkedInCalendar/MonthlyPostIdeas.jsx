import React, { useState } from "react";
import PostItem from "./PostItem";

const MonthlyPostIdeas = ({ month, posts }) => {
  const [expanded, setExpanded] = useState(false);

  // Colors based on month
  const getColors = () => {
    switch (month) {
      case "June":
        return {
          gradient: "from-amber-400 to-orange-400",
          badge: "bg-amber-100 text-amber-600",
          button: "bg-amber-50 hover:bg-amber-100 text-amber-700",
        };
      case "July":
        return {
          gradient: "from-green-400 to-emerald-400",
          badge: "bg-green-100 text-green-600",
          button: "bg-green-50 hover:bg-green-100 text-green-700",
        };
      case "August":
        return {
          gradient: "from-blue-400 to-cyan-400",
          badge: "bg-blue-100 text-blue-600",
          button: "bg-blue-50 hover:bg-blue-100 text-blue-700",
        };
      default:
        return {
          gradient: "from-purple-400 to-violet-400",
          badge: "bg-purple-100 text-purple-600",
          button: "bg-purple-50 hover:bg-purple-100 text-purple-700",
        };
    }
  };

  const { gradient, badge, button } = getColors();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className={`bg-gradient-to-r ${gradient} px-6 py-4`}>
        <h4 className="text-xl font-bold text-white">{month} LinkedIn Posts</h4>
      </div>
      <div className="p-6">
        <ul className="space-y-4">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} badgeClass={badge} />
          ))}
        </ul>

        <div className="mt-6">
          <button
            onClick={() => setExpanded(!expanded)}
            className={`w-full ${button} text-sm font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center gap-2`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transform transition-transform ${
                expanded ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {expanded ? "Show Less" : "Expand Post Ideas"}
          </button>
        </div>

        {expanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <h5 className="font-medium text-gray-900 mb-3">
              Additional Post Ideas:
            </h5>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="pl-4 border-l-2 border-gray-200">
                Share a visualization you created with dataset insights
              </li>
              <li className="pl-4 border-l-2 border-gray-200">
                Post about a challenging problem you solved and how you
                approached it
              </li>
              <li className="pl-4 border-l-2 border-gray-200">
                Ask for book/course recommendations on topics you're learning
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyPostIdeas;
