// filepath: c:\Users\DELL\OneDrive - The Church of Pentecost\Desktop\PROJECTS\DataScience\src\App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LinkedInPage from './pages/LinkedInPage';
import ProgressTracker from './pages/ProgressTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/linkedin' element={<LinkedInPage />} />
        <Route path='/tracker' element={<ProgressTracker />} />
      </Routes>
    </Router>
  );
}

export default App;

