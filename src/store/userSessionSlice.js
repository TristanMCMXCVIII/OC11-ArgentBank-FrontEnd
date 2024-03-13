import { createSlice } from "@reduxjs/toolkit";
import { checkLoggedInStatus, thunkLoginUser } from "../api/logInApi";


const userSessionSlice = createSlice({
    name: 'userSession',
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
            .addCase(thunkLoginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.isLoggedIn = false;
            })
            .addCase(thunkLoginUser.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.isLoggedIn = true;
            })
            .addCase(thunkLoginUser.rejected, (state) => {
                state.loading = false;
                state.isLoggedIn = false;
            })
    }
})

export default userSessionSlice;

export const {logOut} = userSessionSlice.actions;