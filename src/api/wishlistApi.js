// frontend/src/api/paymentApi.js
import axios from './axiosClient';

/**
 * This file includes examples for Stripe or generic payment flow.
 * Adjust endpoints according to your backend provider.
 */

// create checkout session (Stripe)
export const createCheckoutSession = (payload) => axios.post('/payments/checkout-session', payload);

// verify payment (webhook/return)
export const verifyPayment = (payload) => axios.post('/payments/verify', payload);

// for SSLCommerz or local gateway, adapt:
export const initiateGateway = (payload) => axios.post('/payments/initiate', payload);
export const verifyGatewayPayment = (payload) => axios.post('/payments/gateway-verify', payload);

export const paymentApi = {
    createCheckoutSession,
    verifyPayment,
    initiateGateway,
    verifyGatewayPayment,
};