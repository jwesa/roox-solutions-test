import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: "sort",
    initialState: {
        direction: true,
    },
    reducers: {
        changeSortDirection(state) {
            state.direction = !state.direction;
        },
    },
});

export const { changeSortDirection } = sortSlice.actions;

export default sortSlice.reducer;
