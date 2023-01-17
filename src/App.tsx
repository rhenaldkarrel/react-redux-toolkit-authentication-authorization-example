import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import Profile from 'pages/Profile/Profile';
import Home from 'components/Home';
import Navbar from 'components/Navbar';
import BoardModerator from 'components/BoardModerator';
import BoardAdmin from 'components/BoardAdmin';
import BoardUser from 'components/BoardUser';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
        <Route path="/moderator" element={<BoardModerator />} />
        <Route path="/admin" element={<BoardAdmin />} />
        <Route path="/user" element={<BoardUser />} />
      </Routes>
    </>
  );
}

export default App;
