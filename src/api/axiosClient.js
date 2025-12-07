// frontend/src/api/axiosClient.js
import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE || 'http://localhost:5000/api';

const axiosClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // enable if backend sends HttpOnly cookies (optional)
});

// attach access token from localStorage (if exists)
axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// simple response interceptor to normalize errors
axiosClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    const error = err.response?.data || { message: err.message || 'Network Error' };
    return Promise.reject(error);
  }
);

export default axiosClient;
