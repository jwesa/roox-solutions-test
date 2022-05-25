import { configureStore } from "@reduxjs/toolkit";
import fetchUsersReducer from "./reducers/usersReducer";

export default configureStore({
	reducer: {
		users: fetchUsersReducer
	},
});
