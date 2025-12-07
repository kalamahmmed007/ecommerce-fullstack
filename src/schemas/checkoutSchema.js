import { z } from 'zod';

export const shippingSchema = z.object({
    fullName: z.string().min(2, 'Full name is required'),
    phone: z.string().min(10, 'Invalid phone number'),
    address: z.string().min(5, 'Address required'),
    city: z.string().min(2, 'City required'),
    postalCode: z.string().min(4, 'Invalid postal code'),
});
