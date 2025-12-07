export const isEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const isPhone = (phone) => /^[0-9]{10,}$/.test(phone);
