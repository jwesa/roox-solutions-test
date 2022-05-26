import { configureStore } from "@reduxjs/toolkit";
import fetchUsersReducer from "./reducers/usersReducer";
import sortReducer from "./reducers/sortReducer";

export default configureStore({
    reducer: {
        users: fetchUsersReducer,
        sort: sortReducer,
    },
});
