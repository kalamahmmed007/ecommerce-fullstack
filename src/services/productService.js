import { productApi } from '@/api/productApi';

export const fetchProducts = async (params) => {
    const res = await productApi.getProducts(params);
    return res.data;
};

export const fetchProductById = async (id) => {
    const res = await productApi.getProduct(id);
    return res.data;
};

export const createProduct = async (productData) => {
    const res = await productApi.createProduct(productData);
    return res.data;
};

export const updateProduct = async (id, productData) => {
    const res = await productApi.updateProduct(id, productData);
    return res.data;
};

export const deleteProduct = async (id) => {
    const res = await productApi.deleteProduct(id);
    return res.data;
};
