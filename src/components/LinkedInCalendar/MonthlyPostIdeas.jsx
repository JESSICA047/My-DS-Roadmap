import React, { useState } from "react";
import PostItem from "./PostItem";

const MonthlyPostIdeas = ({ month, posts }) => {
  const [expanded, setExpanded] = useState(false);
  const [completedPosts, setCompletedPosts] = useState([]);

  // Calculate progress percentage
  const progressPercentage = Math.round(
    (completedPosts.length / posts.length) * 100
  );

  // Colors based on month
  const getColors = () => {
    switch (month) {
      case "June":
        return {
          gradient: "from-amber-400 to-orange-400",
          badge: "bg-amber-100 text-amber-600",
          button: "bg-amber-50 hover:bg-amber-100 text-amber-700",
          progress: "bg-amber-500",
        };
      case "July":
        return {
          gradient: "from-green-400 to-emerald-400",
          badge: "bg-green-100 text-green-600",
          button: "bg-green-50 hover:bg-green-100 text-green-700",
          progress: "bg-green-500",
        };
      case "August":
        return {
          gradient: "from-blue-400 to-cyan-400",
          badge: "bg-blue-100 text-blue-600",
          button: "bg-blue-50 hover:bg-blue-100 text-blue-700",
          progress: "bg-blue-500",
        };
      default:
        return {
          gradient: "from-purple-400 to-violet-400",
          badge: "bg-purple-100 text-purple-600",
          button: "bg-purple-50 hover:bg-purple-100 text-purple-700",
          progress: "bg-purple-500",
        };
    }
  };

  const { gradient, badge, button, progress } = getColors();

  // Toggle completion status of a post
  const togglePostCompletion = (index) => {
    if (completedPosts.includes(index)) {
      setCompletedPosts(completedPosts.filter((i) => i !== index));
    } else {
      setCompletedPosts([...completedPosts, index]);
    }
  };

  // Calculate expected engagement metrics
  const calculateEngagementMetrics = () => {
    const baseConnections = 100;
    const baseImpressions = 500;
    const baseEngagement = 20;

    // Each completed post increases your network and engagement
    const connectionGrowth = completedPosts.length * 15;
    const impressionGrowth = completedPosts.length * 100;
    const engagementGrowth = completedPosts.length * 8;

    return {
      connections: baseConnections + connectionGrowth,
      impressions: baseImpressions + impressionGrowth,
      engagement: baseEngagement + engagementGrowth,
    };
  };

  const metrics = calculateEngagementMetrics();

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className={`bg-gradient-to-r ${gradient} px-6 py-4`}>
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold text-white">
            {month} LinkedIn Posts
          </h4>
          <div className="text-white text-sm bg-white bg-opacity-20 px-3 py-1 rounded-full">
            {completedPosts.length}/{posts.length} Posts
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-2 w-full bg-white bg-opacity-30 h-2 rounded-full">
          <div
            className={`h-full ${progress} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-3 gap-4 mb-6 text-center text-sm">
          <div className="p-2 bg-gray-50 rounded-lg">
            <div className="font-bold text-gray-800">{metrics.connections}</div>
            <div className="text-xs text-gray-500">Est. Connections</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <div className="font-bold text-gray-800">{metrics.impressions}</div>
            <div className="text-xs text-gray-500">Est. Impressions</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-lg">
            <div className="font-bold text-gray-800">{metrics.engagement}</div>
            <div className="text-xs text-gray-500">Est. Engagements</div>
          </div>
        </div>

        <ul className="space-y-4">
          {posts.map((post, index) => (
            <div key={index} className="relative">
              <div
                className="absolute -left-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={() => togglePostCompletion(index)}
              >
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
                  ${
                    completedPosts.includes(index)
                      ? `${progress.replace("bg", "border")} bg-white`
                      : "border-gray-300"
                  }`}
                >
                  {completedPosts.includes(index) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <div
                className={`${
                  completedPosts.includes(index) ? "opacity-60" : ""
                }`}
              >
                <PostItem post={post} badgeClass={badge} />
              </div>
            </div>
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
              <li className="pl-4 border-l-2 border-gray-200 group relative hover:bg-gray-50 p-2 rounded transition-colors">
                Share a visualization you created with dataset insights
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 text-xs">
                  Copy
                </button>
              </li>
              <li className="pl-4 border-l-2 border-gray-200 group relative hover:bg-gray-50 p-2 rounded transition-colors">
                Post about a challenging problem you solved and how you
                approached it
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 text-xs">
                  Copy
                </button>
              </li>
              <li className="pl-4 border-l-2 border-gray-200 group relative hover:bg-gray-50 p-2 rounded transition-colors">
                Ask for book/course recommendations on topics you're learning
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 text-xs">
                  Copy
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MonthlyPostIdeas;
