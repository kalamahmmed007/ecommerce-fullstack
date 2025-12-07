import { authApi } from '@/api/authApi';
import { saveToLocal, removeFromLocal } from '@/utils/storage';

export const login = async (credentials) => {
    const res = await authApi.login(credentials);
    saveToLocal('user', res.data.user);
    saveToLocal('token', res.data.token);
    return res.data;
};

export const register = async (userData) => {
    const res = await authApi.register(userData);
    saveToLocal('user', res.data.user);
    saveToLocal('token', res.data.token);
    return res.data;
};

export const logout = () => {
    removeFromLocal('user');
    removeFromLocal('token');
};
