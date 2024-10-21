import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Cars from './components/Cars';
import Login from './Login'; // Import the Login component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h1>Welcome to Car Rental</h1>} />
      </Routes>
    </Router>
  );
};

export default App;