// filepath: c:\Users\DELL\OneDrive - The Church of Pentecost\Desktop\PROJECTS\DataScience\src\App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LinkedInPage from "./pages/LinkedInPage";
import ProgressTracker from "./pages/ProgressTracker";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/linkedin" element={<LinkedInPage />} />
        <Route path="/tracker" element={<ProgressTracker />} />
        {/* Fallback route - redirect to home if route not found */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
