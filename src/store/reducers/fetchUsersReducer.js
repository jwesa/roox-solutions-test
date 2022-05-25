import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        return users;
    } catch (error) {
        console.log(error);
    }
});

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.loading = true;
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload;
            state.loading = false;
        },
    },
});

export default usersSlice.reducer;
