import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: "sort",
    initialState: {
        name: null,
        direction: true,
    },
    reducers: {
        changeSortDirection(state, action) {
            // if (state.name === null) {
            //     state.name = action.payload;
            //     state.direction = !state.direction;
            // } else if (state.name === action.payload) {
            //     state.direction = !state.direction;
            // } else if (state.name !== action.payload) {
            //     state.name = action.payload;
            //     state.direction = true;
            // }
            state.direction = !state.direction;
        },
    },
});

export const { changeSortDirection } = sortSlice.actions;

export default sortSlice.reducer;
