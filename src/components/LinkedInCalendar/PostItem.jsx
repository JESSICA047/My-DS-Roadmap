import React from "react";

const PostItem = ({ post, badgeClass }) => {
  return (
    <li className="flex hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200 animate__animated animate__fadeIn group">
      <div className="flex-shrink-0 mt-1">
        <span
          className={`inline-flex items-center justify-center h-10 w-10 rounded-full ${badgeClass} text-sm font-medium shadow-sm group-hover:scale-110 transition-transform`}
        >
          {post.icon || post.week}
        </span>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900">{post.title}</p>
        <p className="text-sm text-gray-500">{post.description}</p>
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
      </div>
    </li>
  );
};

export default PostItem;
