import axios from 'axios';

export const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    });

    return res.data;
};
