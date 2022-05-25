import { configureStore } from "@reduxjs/toolkit";
import fetchUsersReducer from "./reducers/fetchUsersReducer";

export default configureStore({
	reducer: {
		users: fetchUsersReducer
	},
});
