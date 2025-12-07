// src/utils/axiosInstance.js
import axios from "axios";
import { getToken } from "./storage"; // make sure getToken is exported from storage.js

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // make sure this is in .env
    headers: {
        "Content-Type": "application/json",
    },
});

// Request interceptor for adding JWT token
instance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor for handling errors / refresh token logic
instance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Optional: handle 401, refresh token, etc.
        return Promise.reject(error);
    }
);

export default instance;
