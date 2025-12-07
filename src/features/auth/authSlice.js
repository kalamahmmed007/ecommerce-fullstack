import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({ email, password }, thunkAPI) => {
        try {
            const res = await axios.post("/auth/login", { email, password });
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

export const refreshTokenThunk = createAsyncThunk(
    "auth/refresh",
    async (_, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const res = await axios.post("/auth/refresh", {
                refreshToken: state.auth.refreshToken,
            });
            return res.data;
        } catch (err) {
            thunkAPI.dispatch(logout());
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: null,
        token: localStorage.getItem("token") || null,
        refreshToken: localStorage.getItem("refreshToken") || null,
        loading: false,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            localStorage.clear();
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => { state.loading = true; })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.refreshToken = action.payload.refreshToken;
                localStorage.setItem("token", action.payload.token);
                localStorage.setItem("refreshToken", action.payload.refreshToken);
            })
            .addCase(loginUser.rejected, (state) => { state.loading = false; })
            .addCase(refreshTokenThunk.fulfilled, (state, action) => {
                state.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
