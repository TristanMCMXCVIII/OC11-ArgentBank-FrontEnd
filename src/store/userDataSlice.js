import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: "userData",
    initialState: {},
    reducers: {
        saveUserData: (state, action) => {
        state = action.payload;
        return state; // return quand on crée une nouvelle copie du state (a un nouvel état)
        },
        editUserName: (state, action) => {
        state.userName = action.payload; // pas besoin du state car on ne fait que modifier le state existant. RTK détectera les changements. on peut aussi retourner me state si on veut mais pas obligatoire sur ce cas ci
        },
        removeUserData: (state) => {
        state = {};
        return state;
        },
    },
});

export const { saveUserData, editUserName, removeUserData } = userDataSlice.actions;
