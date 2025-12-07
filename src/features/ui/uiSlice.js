import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        loading: false,
        notification: null,
    },
    reducers: {
        setLoading: (state, action) => { state.loading = action.payload; },
        setNotification: (state, action) => { state.notification = action.payload; },
        clearNotification: (state) => { state.notification = null; },
    },
});

export const { setLoading, setNotification, clearNotification } = uiSlice.actions;
export default uiSlice.reducer;
