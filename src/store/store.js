import { configureStore } from "@reduxjs/toolkit";
import userSessionSlice from './userSessionSlice';

import { userDataSlice } from "./userDataSlice";


const store = configureStore({
    reducer: {
        userSession: userSessionSlice.reducer,
        userData: userDataSlice.reducer,
    }
})

export default store;