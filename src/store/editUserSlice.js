import { createSlice } from "@reduxjs/toolkit";

export const editUserSlice = createSlice({
    name: "editUser",
    initialState: { open: false },
    reducers: {
        toggleEdit: (state) => {
            state.open = !state.open;
        },
    },
});

export const { toggleEdit } = editUserSlice.actions;
