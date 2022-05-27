import { configureStore } from "@reduxjs/toolkit";
import fetchUsersReducer from "./reducers/usersReducer";
import sortReducer from "./reducers/sortReducer";
import readonlyReducer from "./reducers/readonlyReducer";

export default configureStore({
    reducer: {
        users: fetchUsersReducer,
        sort: sortReducer,
        readonly: readonlyReducer,
    },
});
