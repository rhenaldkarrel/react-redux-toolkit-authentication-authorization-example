import axios from 'axios';
import type { AxiosResponse } from 'axios';

export interface ICredentials {
  username: string;
  password: string;
  email: string;
}

export type TLogin = Pick<ICredentials, 'password' | 'username'>;

const API_URL = 'http://localhost:8080/api/auth/';

const register = ({ username, email, password }: ICredentials) => {
  return axios.post(API_URL + 'signup', {
    username,
    password,
    email,
  });
};

const login = ({ username, password }: TLogin) => {
  return axios
    .post(API_URL + 'signin', {
      username,
      password,
    })
    .then((res: AxiosResponse<TLogin>) => {
      if (res.data.username) {
        localStorage.setItem('user', JSON.stringify(res.data));
      }

      return res.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  return axios.post(API_URL + 'signout').then(res => res.data);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user') ?? '');
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
