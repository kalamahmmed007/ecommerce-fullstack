// src/features/products/productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axiosInstance";

// Fetch all products
export const fetchProducts = createAsyncThunk(
    "products/fetchAll",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/products");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
);

// Fetch featured products
export const fetchFeaturedProducts = createAsyncThunk(
    "products/fetchFeatured",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/products/featured");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
);

// Fetch new arrivals
export const fetchNewArrivals = createAsyncThunk(
    "products/fetchNewArrivals",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/products/new-arrivals");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
);

// Fetch best sellers
export const fetchBestSellers = createAsyncThunk(
    "products/fetchBestSellers",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/products/best-sellers");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
);

// Fetch single product by ID
export const fetchProductById = createAsyncThunk(
    "products/fetchById",
    async (id, thunkAPI) => {
        try {
            const res = await axios.get(`/products/${id}`);
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response?.data || err.message);
        }
    }
);

const productSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        featured: [],
        newArrivals: [],
        bestSellers: [],
        selectedProduct: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // All products
            .addCase(fetchProducts.pending, (state) => { state.loading = true; })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Featured
            .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
                state.featured = action.payload;
            })

            // New Arrivals
            .addCase(fetchNewArrivals.fulfilled, (state, action) => {
                state.newArrivals = action.payload;
            })

            // Best Sellers
            .addCase(fetchBestSellers.fulfilled, (state, action) => {
                state.bestSellers = action.payload;
            })

            // Single product
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.selectedProduct = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedProduct = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.selectedProduct = null;
                state.error = action.payload;
            });
    },
});

export default productSlice.reducer;
