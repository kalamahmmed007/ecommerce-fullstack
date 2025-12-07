import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../utils/axiosInstance";

export const fetchOrders = createAsyncThunk(
    "orders/fetch",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get("/orders");
            return res.data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.response.data);
        }
    }
);

const orderSlice = createSlice({
    name: "orders",
    initialState: { items: [], loading: false },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchOrders.pending, (state) => { state.loading = true; })
            .addCase(fetchOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchOrders.rejected, (state) => { state.loading = false; });
    },
});

export default orderSlice.reducer;
