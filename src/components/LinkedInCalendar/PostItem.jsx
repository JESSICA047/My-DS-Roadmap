import React, { useState } from "react";

const PostItem = ({ post, badgeClass }) => {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Define difficulty indicators and their styles
  const getDifficultyBadge = () => {
    const difficultyMap = {
      easy: {
        class: "bg-green-100 text-green-700",
        label: "Easy",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        ),
      },
      medium: {
        class: "bg-yellow-100 text-yellow-700",
        label: "Medium",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ),
      },
      hard: {
        class: "bg-red-100 text-red-700",
        label: "Hard",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        ),
      },
      important: {
        class: "bg-purple-100 text-purple-700",
        label: "Important",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        ),
      },
    };

    return post.difficulty
      ? difficultyMap[post.difficulty]
      : {
          class: "bg-gray-100 text-gray-700",
          label: "General",
          icon: (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ),
        };
  };

  const difficultyBadge = getDifficultyBadge();
  // We're directly using post.bestTimeToPost in the render now

  // Function to copy post content to clipboard
  const copyToClipboard = () => {
    const content = `${post.title}\n\n${post.description}\n\n${
      post.hashtags ? post.hashtags.map((tag) => `#${tag}`).join(" ") : ""
    }`;

    navigator.clipboard.writeText(content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <li className="flex flex-col md:flex-row hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200 animate__animated animate__fadeIn group border border-transparent hover:border-gray-200 hover:shadow-md">
      <div className="flex-shrink-0 mt-1">
        <span
          className={`inline-flex items-center justify-center h-10 w-10 rounded-full ${badgeClass} text-sm font-medium shadow-sm group-hover:scale-110 transition-transform`}
        >
          {post.icon || post.week}
        </span>
      </div>
      <div className="ml-3 flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-gray-900">{post.title}</p>
            <p className="text-sm text-gray-500">{post.description}</p>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded-full ${difficultyBadge.class} flex items-center`}
          >
            {difficultyBadge.icon}
            {difficultyBadge.label}
          </span>
        </div>
        <div className="flex mt-2 space-x-2">
          {post.hashtags &&
            post.hashtags.map((tag, index) => (
              <span
                key={index}
                className="text-xs text-blue-600 hover:text-blue-800"
              >
                #{tag}
              </span>
            ))}
        </div>

        {/* Best time to post info */}
        {post.bestTimeToPost && (
          <div className="mt-2 flex items-center text-xs text-gray-500">
            <svg
              className="w-3 h-3 mr-1 text-indigo-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Best time to post: {post.bestTimeToPost}
          </div>
        )}

        <div className="mt-2 flex justify-between items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-xs flex items-center gap-1 text-indigo-500 hover:text-indigo-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-3 w-3 transform transition-transform ${
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
            {expanded ? "Show Less" : "Show Tips"}
          </button>

          <button
            onClick={copyToClipboard}
            className={`text-xs flex items-center gap-1 px-2 py-1 rounded ${
              copied
                ? "bg-green-100 text-green-700"
                : "text-gray-500 hover:text-indigo-600 hover:bg-indigo-50"
            } transition-colors`}
          >
            {copied ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Copied!
              </>
            ) : (
              <>
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
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>

        {/* Expanded content with posting tips */}
        {expanded && (
          <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-600">
            <h4 className="font-medium text-gray-700 mb-1">Posting Tips:</h4>
            <ul className="space-y-1 pl-4 list-disc">
              <li>Include a question to boost engagement</li>
              <li>Add relevant hashtags for better visibility</li>
              <li>Keep formatting clean with line breaks</li>
            </ul>
            <div className="mt-2 p-2 bg-indigo-50 rounded">
              <p className="text-indigo-700 font-medium">
                Estimated Engagement:{" "}
              </p>
              <div className="flex space-x-3 mt-1">
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ~30 views
                </span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                  ~12 reactions
                </span>
                <span className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1 text-indigo-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                  ~5 comments
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default PostItem;
