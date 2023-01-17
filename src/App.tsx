import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Profile from 'pages/Profile/Profile';
import Home from 'components/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
