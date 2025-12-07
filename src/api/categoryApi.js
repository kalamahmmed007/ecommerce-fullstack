// frontend/src/api/categoryApi.js
import axios from './axiosClient';

export const fetchCategories = () => axios.get('/categories');
export const createCategory = (payload) => axios.post('/categories', payload);
export const updateCategory = (id, payload) => axios.put(`/categories/${id}`, payload);
export const deleteCategory = (id) => axios.delete(`/categories/${id}`);
export const categoryApi = {
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory,
};