import React, { useState } from "react";
import PostItem from "./PostItemSimplified";

const MonthlyPostIdeas = ({ month, posts }) => {
  const [completedPosts, setCompletedPosts] = useState([]);

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

  const { gradient, badge, progress } = getColors();

  // Toggle completion status of a post
  const togglePostCompletion = (index) => {
    if (completedPosts.includes(index)) {
      setCompletedPosts(completedPosts.filter((i) => i !== index));
    } else {
      setCompletedPosts([...completedPosts, index]);
    }
  };

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
      </div>

      <div className="p-6">
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
      </div>
    </div>
  );
};

export default MonthlyPostIdeas;
