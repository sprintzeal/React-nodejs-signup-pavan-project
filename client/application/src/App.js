import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRegisterPage from './Login';
import HomePage from './Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginRegisterPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
