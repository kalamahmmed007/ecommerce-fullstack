// frontend/src/api/userApi.js
import axios from './axiosClient';

export const getProfile = () => axios.get('/users/profile');
export const updateProfile = (payload) =>
    axios.put('/users/profile', payload, {
        headers: { 'Content-Type': payload instanceof FormData ? 'multipart/form-data' : 'application/json' },
    });

export const getUsers = (params = {}) => axios.get('/users', { params }); // admin
export const getUserById = (id) => axios.get(`/users/${id}`);
export const updateUserById = (id, payload) => axios.put(`/users/${id}`, payload);
export const deleteUserById = (id) => axios.delete(`/users/${id}`);
export const userApi = {
    getProfile,
    updateProfile,
    getUsers,
    getUserById,
    updateUserById,
    deleteUserById,
};