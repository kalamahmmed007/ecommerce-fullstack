export const saveToLocal = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const getFromLocal = (key) => JSON.parse(localStorage.getItem(key));
export const removeFromLocal = (key) => localStorage.removeItem(key);


export const getToken = () => {
    return localStorage.getItem("token");
};

export const setToken = (token) => {
    localStorage.setItem("token", token);
};

export const removeToken = () => {
    localStorage.removeItem("token");
};
