import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Profile from 'pages/Profile/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
