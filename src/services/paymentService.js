import { paymentApi } from '@/api/paymentApi';

export const createPaymentIntent = async (orderId) => {
    const res = await paymentApi.createPaymentIntent({ orderId });
    return res.data;
};

export const confirmPayment = async (paymentId) => {
    const res = await paymentApi.confirmPayment(paymentId);
    return res.data;
};
