import axios from 'axios';

const API_URL = 'http://localhost:8080/api/test/';
const USER = JSON.parse(localStorage.getItem('user') || '{}');
const HEADERS = {
  headers: {
    authorization: 'Bearer ' + USER.token,
  },
};

const getPublicContent = () => {
  return axios.get(API_URL + 'all');
};

const getUserBoard = () => {
  return axios.get(API_URL + 'user', HEADERS);
};

const getModeratorBoard = () => {
  return axios.get(API_URL + 'mod', HEADERS);
};

const getAdminBoard = () => {
  return axios.get(API_URL + 'admin', HEADERS);
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;
