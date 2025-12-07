import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from "../../api/userApi";

const initialState = {
    currentUser: null,
    isAuthenticated: false,
    profile: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        avatar: '',
        dateOfBirth: '',
        gender: '',
    },
    addresses: [],
    orders: [],
    preferences: {
        newsletter: true,
        notifications: true,
        language: 'en',
        currency: 'BDT',
    },
    isLoading: false,
    error: null,
    authToken: null,
};

// Async Thunks
export const loginUser = createAsyncThunk(
    'user/login',
    async ({ email, password }, { rejectWithValue }) => {
        try {
            // const response = await userApi.login({ email, password });
            // localStorage.setItem('authToken', response.data.token);
            // return response.data;

            // Mock data for demo
            const mockUser = {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: email,
                phone: '+1234567890',
                avatar: '/api/placeholder/150/150',
                token: 'mock-jwt-token-12345',
            };
            localStorage.setItem('authToken', mockUser.token);
            return mockUser;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData, { rejectWithValue }) => {
        try {
            // const response = await userApi.register(userData);
            // localStorage.setItem('authToken', response.data.token);
            // return response.data;

            // Mock data for demo
            const mockUser = {
                id: Date.now(),
                ...userData,
                avatar: '/api/placeholder/150/150',
                token: 'mock-jwt-token-' + Date.now(),
            };
            localStorage.setItem('authToken', mockUser.token);
            return mockUser;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue }) => {
        try {
            // await userApi.logout();
            localStorage.removeItem('authToken');
            return null;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Logout failed');
        }
    }
);

export const fetchUserProfile = createAsyncThunk(
    'user/fetchProfile',
    async (_, { rejectWithValue }) => {
        try {
            // const response = await userApi.getProfile();
            // return response.data;

            // Mock data for demo
            return {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '+1234567890',
                avatar: '/api/placeholder/150/150',
                dateOfBirth: '1990-01-01',
                gender: 'male',
            };
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch profile');
        }
    }
);

export const updateUserProfile = createAsyncThunk(
    'user/updateProfile',
    async (profileData, { rejectWithValue }) => {
        try {
            // const response = await userApi.updateProfile(profileData);
            // return response.data;

            // Mock data for demo
            return profileData;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update profile');
        }
    }
);

export const changePassword = createAsyncThunk(
    'user/changePassword',
    async ({ currentPassword, newPassword }, { rejectWithValue }) => {
        try {
            // const response = await userApi.changePassword({ currentPassword, newPassword });
            // return response.data;

            // Mock data for demo
            return { message: 'Password changed successfully' };
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to change password');
        }
    }
);

export const fetchUserAddresses = createAsyncThunk(
    'user/fetchAddresses',
    async (_, { rejectWithValue }) => {
        try {
            // const response = await userApi.getAddresses();
            // return response.data;

            // Mock data for demo
            return [
                {
                    id: 1,
                    type: 'home',
                    fullName: 'John Doe',
                    street: '123 Main St',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10001',
                    country: 'USA',
                    phone: '+1234567890',
                    isDefault: true,
                },
                {
                    id: 2,
                    type: 'work',
                    fullName: 'John Doe',
                    street: '456 Office Blvd',
                    city: 'New York',
                    state: 'NY',
                    zipCode: '10002',
                    country: 'USA',
                    phone: '+1234567890',
                    isDefault: false,
                },
            ];
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch addresses');
        }
    }
);

export const addUserAddress = createAsyncThunk(
    'user/addAddress',
    async (addressData, { rejectWithValue }) => {
        try {
            // const response = await userApi.addAddress(addressData);
            // return response.data;

            // Mock data for demo
            return {
                id: Date.now(),
                ...addressData,
            };
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to add address');
        }
    }
);

export const updateUserAddress = createAsyncThunk(
    'user/updateAddress',
    async ({ id, addressData }, { rejectWithValue }) => {
        try {
            // const response = await userApi.updateAddress(id, addressData);
            // return response.data;

            // Mock data for demo
            return {
                id,
                ...addressData,
            };
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to update address');
        }
    }
);

export const deleteUserAddress = createAsyncThunk(
    'user/deleteAddress',
    async (addressId, { rejectWithValue }) => {
        try {
            // await userApi.deleteAddress(addressId);
            return addressId;
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to delete address');
        }
    }
);

export const fetchUserOrders = createAsyncThunk(
    'user/fetchOrders',
    async (_, { rejectWithValue }) => {
        try {
            // const response = await userApi.getOrders();
            // return response.data;

            // Mock data for demo
            return [
                {
                    id: 1,
                    orderNumber: 'ORD-2024-001',
                    date: '2024-01-15',
                    status: 'delivered',
                    total: 299.99,
                    items: 3,
                },
                {
                    id: 2,
                    orderNumber: 'ORD-2024-002',
                    date: '2024-01-20',
                    status: 'processing',
                    total: 149.99,
                    items: 2,
                },
            ];
        } catch (error) {
            return rejectWithValue(error.response?.data || 'Failed to fetch orders');
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.currentUser = action.payload;
            state.isAuthenticated = !!action.payload;
        },

        updateProfile: (state, action) => {
            state.profile = { ...state.profile, ...action.payload };
        },

        setPreferences: (state, action) => {
            state.preferences = { ...state.preferences, ...action.payload };
        },

        setDefaultAddress: (state, action) => {
            const addressId = action.payload;
            state.addresses = state.addresses.map(addr => ({
                ...addr,
                isDefault: addr.id === addressId,
            }));
        },

        clearError: (state) => {
            state.error = null;
        },

        clearUser: (state) => {
            state.currentUser = null;
            state.isAuthenticated = false;
            state.profile = {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                avatar: '',
                dateOfBirth: '',
                gender: '',
            };
            state.addresses = [];
            state.orders = [];
            state.authToken = null;
        },
    },

    extraReducers: (builder) => {
        builder
            // Login
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
                state.isAuthenticated = true;
                state.authToken = action.payload.token;
                state.profile = {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    avatar: action.payload.avatar,
                };
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Register
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
                state.isAuthenticated = true;
                state.authToken = action.payload.token;
                state.profile = {
                    firstName: action.payload.firstName,
                    lastName: action.payload.lastName,
                    email: action.payload.email,
                    phone: action.payload.phone,
                    avatar: action.payload.avatar,
                };
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Logout
            .addCase(logoutUser.fulfilled, (state) => {
                state.currentUser = null;
                state.isAuthenticated = false;
                state.profile = initialState.profile;
                state.addresses = [];
                state.orders = [];
                state.authToken = null;
                state.error = null;
            })

            // Fetch Profile
            .addCase(fetchUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profile = { ...state.profile, ...action.payload };
            })
            .addCase(fetchUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Update Profile
            .addCase(updateUserProfile.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.profile = { ...state.profile, ...action.payload };
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Change Password
            .addCase(changePassword.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(changePassword.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Fetch Addresses
            .addCase(fetchUserAddresses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserAddresses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.addresses = action.payload;
            })
            .addCase(fetchUserAddresses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            // Add Address
            .addCase(addUserAddress.fulfilled, (state, action) => {
                state.addresses.push(action.payload);
            })

            // Update Address
            .addCase(updateUserAddress.fulfilled, (state, action) => {
                const index = state.addresses.findIndex(addr => addr.id === action.payload.id);
                if (index !== -1) {
                    state.addresses[index] = action.payload;
                }
            })

            // Delete Address
            .addCase(deleteUserAddress.fulfilled, (state, action) => {
                state.addresses = state.addresses.filter(addr => addr.id !== action.payload);
            })

            // Fetch Orders
            .addCase(fetchUserOrders.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUserOrders.fulfilled, (state, action) => {
                state.isLoading = false;
                state.orders = action.payload;
            })
            .addCase(fetchUserOrders.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const {
    setUser,
    updateProfile,
    setPreferences,
    setDefaultAddress,
    clearError,
    clearUser,
} = userSlice.actions;

// Selectors
export const selectCurrentUser = (state) => state.user.currentUser;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserProfile = (state) => state.user.profile;
export const selectUserAddresses = (state) => state.user.addresses;
export const selectDefaultAddress = (state) =>
    state.user.addresses.find(addr => addr.isDefault);
export const selectUserOrders = (state) => state.user.orders;
export const selectUserPreferences = (state) => state.user.preferences;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;
export const selectAuthToken = (state) => state.user.authToken;

export default userSlice.reducer;