import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const notify = (message, type = 'success') => {
        type === 'success' ? toast.success(message) : toast.error(message);
    };

    return <NotificationContext.Provider value={{ notify }}>{children}</NotificationContext.Provider>;
};

export const useNotification = () => useContext(NotificationContext);
