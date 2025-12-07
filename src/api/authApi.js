// frontend/src/api/authApi.js
import axios from './axiosClient';

export const authApi = {
    register: (payload) => axios.post('/auth/register', payload),
    login: (payload) => axios.post('/auth/login', payload),
    logout: () => axios.post('/auth/logout'), // if backend supports
    me: () => axios.get('/auth/me'),
    refreshToken: () => axios.post('/auth/refresh'), // if backend supports
    forgotPassword: (email) => axios.post('/auth/forgot-password', { email }),
    resetPassword: (token, newPassword) => axios.post('/auth/reset-password', { token, newPassword }),
};

export const register = (payload) => axios.post('/auth/register', payload);
export const login = (payload) => axios.post('/auth/login', payload);
export const logout = () => axios.post('/auth/logout'); // if backend supports
export const me = () => axios.get('/auth/me');

// If your backend supports refresh token via endpoint:
export const refreshToken = () => axios.post('/auth/refresh');
