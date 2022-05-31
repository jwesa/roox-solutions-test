import { IUser } from "./../../types/types";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface UsersState {
    users: IUser[];
    loading: boolean;
}

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

const initialState: UsersState = {
    users: [],
    loading: false,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateUsers(state, action) {
            state.users = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(
                fetchUsers.fulfilled,
                (state, action: PayloadAction<IUser[]>) => {
                    state.users = action.payload;
                    state.loading = false;
                }
            );
    },
});

export const { updateUsers } = usersSlice.actions;

export default usersSlice.reducer;
