// frontend/src/api/productApi.js
import axios from './axiosClient';

export const fetchProducts = (params = {}) =>
  axios.get('/products', { params }); // supports page, limit, q, category, sort etc.

export const fetchProduct = (id) => axios.get(`/products/${id}`);

export const createProduct = (data) => {
  // data can be FormData (for images) or JSON depending on backend
  return axios.post('/products', data, {
    headers: { 'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json' },
  });
};

export const updateProduct = (id, data) =>
  axios.put(`/products/${id}`, data, {
    headers: { 'Content-Type': data instanceof FormData ? 'multipart/form-data' : 'application/json' },
  });

export const deleteProduct = (id) => axios.delete(`/products/${id}`);

export const uploadImages = (formData) =>
  axios.post('/uploads', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
