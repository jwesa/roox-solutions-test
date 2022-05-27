import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        return await response.json();
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
    reducers: {
        updateUsers(state, action) {
            state.users = action.payload;
        },
    },
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

export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;
