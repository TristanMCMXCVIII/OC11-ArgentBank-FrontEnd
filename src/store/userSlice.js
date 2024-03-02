import { createSlice } from "@reduxjs/toolkit";
import { checkLoggedInStatus, loginUser } from "../api/signInApi";


const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: null,
        isLoggedIn: checkLoggedInStatus(),
    },
    reducers: {
        logOut : (state) => {
            state.isLoggedIn = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isLoggedIn = false;
            })
            .addCase(loginUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.isLoggedIn = true;
            })
            .addCase(loginUser.rejected, (state) => {
                state.loading = false;
                state.isLoggedIn = false;
            })
    }
})

export default userSlice.reducer;

export const {logOut} = userSlice.actions;