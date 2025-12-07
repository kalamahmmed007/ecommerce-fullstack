import { CURRENCIES } from '@/config/constants';

export const formatPrice = (amount, currency = 'BDT') => {
    return `${CURRENCIES[currency]}${amount.toFixed(2)}`;
};
