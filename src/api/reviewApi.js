// frontend/src/api/reviewApi.js
import axios from './axiosClient';

export const createReview = (productId, payload) => axios.post(`/products/${productId}/reviews`, payload);
export const getReviews = (productId, params = {}) => axios.get(`/products/${productId}/reviews`, { params });
export const deleteReview = (productId, reviewId) =>
    axios.delete(`/products/${productId}/reviews/${reviewId}`);
export const updateReview = (productId, reviewId, payload) =>
    axios.put(`/products/${productId}/reviews/${reviewId}`, payload);
export const reviewApi = {
    createReview,
    getReviews,
    deleteReview,
    updateReview,
};