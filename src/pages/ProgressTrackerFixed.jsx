import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProgressTrackerFixed() {
  const navigate = useNavigate();

  // Redirect to the main progress tracker page
  useEffect(() => {
    navigate("/tracker");
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-xl font-medium text-gray-700">
          Redirecting to Progress Tracker...
        </h2>
        <div className="mt-4">
          <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressTrackerFixed;
