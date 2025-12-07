import { orderApi } from '@/api/orderApi';

export const createOrder = async (orderData) => {
    const res = await orderApi.createOrder(orderData);
    return res.data;
};

export const fetchOrders = async (userId) => {
    const res = await orderApi.getOrders(userId);
    return res.data;
};

export const fetchOrderById = async (orderId) => {
    const res = await orderApi.getOrder(orderId);
    return res.data;
};

export const updateOrderStatus = async (orderId, status) => {
    const res = await orderApi.updateOrderStatus(orderId, status);
    return res.data;
};
