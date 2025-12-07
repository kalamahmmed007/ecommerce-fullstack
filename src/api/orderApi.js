// frontend/src/api/orderApi.js
import axios from './axiosClient';

export const createOrder = (payload) => axios.post('/orders', payload);
export const getOrder = (orderId) => axios.get(`/orders/${orderId}`);
export const getUserOrders = () => axios.get('/orders/my'); // example endpoint
export const adminGetOrders = (params = {}) => axios.get('/orders', { params }); // admin
export const updateOrderStatus = (orderId, status) => axios.put(`/orders/${orderId}/status`, { status });
export const deleteOrder = (orderId) => axios.delete(`/orders/${orderId}`);

export const orderApi = {
    createOrder,
    getOrder,
    getUserOrders,
    getAllOrders: adminGetOrders,
    updateOrderStatus,
    deleteOrder,
};