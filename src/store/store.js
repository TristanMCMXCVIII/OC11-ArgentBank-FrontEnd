import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice';

import { userDataSlice } from "./userDataSlice";
import { editUserSlice } from "./editUserSlice";


const store = configureStore({
    reducer: {
        user: userReducer,
        userData: userDataSlice.reducer,
        editUser: editUserSlice.reducer,
    }
})

export default store;