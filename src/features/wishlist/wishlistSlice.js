import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosClient from '../../api/axiosClient';

// Async thunks for API calls
export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchWishlist',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axiosClient.get(`/users/${userId}/wishlist`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to fetch wishlist');
        }
    }
);

export const addToWishlist = createAsyncThunk(
    'wishlist/addToWishlist',
    async ({ userId, productId }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.post(`/users/${userId}/wishlist`, {
                productId
            });
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to add to wishlist');
        }
    }
);

export const removeFromWishlist = createAsyncThunk(
    'wishlist/removeFromWishlist',
    async ({ userId, productId }, { rejectWithValue }) => {
        try {
            const response = await axiosClient.delete(`/users/${userId}/wishlist/${productId}`);
            return { productId, ...response.data };
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to remove from wishlist');
        }
    }
);

export const moveToCart = createAsyncThunk(
    'wishlist/moveToCart',
    async ({ userId, productId, quantity = 1 }, { rejectWithValue, dispatch }) => {
        try {
            // Add to cart
            await axiosClient.post(`/cart/${userId}/items`, {
                productId,
                quantity
            });

            // Remove from wishlist
            await axiosClient.delete(`/users/${userId}/wishlist/${productId}`);

            return { productId };
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to move to cart');
        }
    }
);

export const clearWishlist = createAsyncThunk(
    'wishlist/clearWishlist',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await axiosClient.delete(`/users/${userId}/wishlist`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || 'Failed to clear wishlist');
        }
    }
);

const initialState = {
    items: [],
    loading: false,
    error: null,
    totalItems: 0,
    lastUpdated: null
};

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        // Local state management
        clearError: (state) => {
            state.error = null;
        },
        resetWishlist: (state) => {
            state.items = [];
            state.totalItems = 0;
            state.error = null;
            state.loading = false;
        },
        // Optimistic updates
        optimisticAddToWishlist: (state, action) => {
            const exists = state.items.find(item => item.productId === action.payload.productId);
            if (!exists) {
                state.items.push(action.payload);
                state.totalItems += 1;
            }
        },
        optimisticRemoveFromWishlist: (state, action) => {
            state.items = state.items.filter(item => item.productId !== action.payload);
            state.totalItems = state.items.length;
        }
    },
    extraReducers: (builder) => {
        builder
            // Fetch Wishlist
            .addCase(fetchWishlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items || action.payload;
                state.totalItems = state.items.length;
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(fetchWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Add to Wishlist
            .addCase(addToWishlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.loading = false;
                const newItem = action.payload.item || action.payload;
                const exists = state.items.find(item => item.productId === newItem.productId);
                if (!exists) {
                    state.items.push(newItem);
                    state.totalItems += 1;
                }
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(addToWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Remove from Wishlist
            .addCase(removeFromWishlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromWishlist.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    item => item.productId !== action.payload.productId
                );
                state.totalItems = state.items.length;
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(removeFromWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Move to Cart
            .addCase(moveToCart.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(moveToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.items = state.items.filter(
                    item => item.productId !== action.payload.productId
                );
                state.totalItems = state.items.length;
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(moveToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Clear Wishlist
            .addCase(clearWishlist.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(clearWishlist.fulfilled, (state) => {
                state.loading = false;
                state.items = [];
                state.totalItems = 0;
                state.lastUpdated = new Date().toISOString();
            })
            .addCase(clearWishlist.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

// Selectors
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectWishlistLoading = (state) => state.wishlist.loading;
export const selectWishlistError = (state) => state.wishlist.error;
export const selectWishlistTotalItems = (state) => state.wishlist.totalItems;
export const selectIsInWishlist = (productId) => (state) =>
    state.wishlist.items.some(item => item.productId === productId);

export const {
    clearError,
    resetWishlist,
    optimisticAddToWishlist,
    optimisticRemoveFromWishlist
} = wishlistSlice.actions;

export default wishlistSlice.reducer;