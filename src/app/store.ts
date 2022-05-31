import { configureStore } from "@reduxjs/toolkit";
import fetchUsersReducer from "./reducers/usersReducer";
import sortReducer from "./reducers/sortReducer";
import readonlyReducer from "./reducers/readonlyReducer";

const store = configureStore({
    reducer: {
        users: fetchUsersReducer,
        sort: sortReducer,
        readonly: readonlyReducer,
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
