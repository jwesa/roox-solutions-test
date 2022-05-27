import { createSlice } from "@reduxjs/toolkit";

const readonlyReducer = createSlice({
	name: "readonly",
	initialState: {
		readonly: true
	},
	reducers: {
		toggleReadonly(state) {
			state.readonly = !state.readonly;
		}
	}
})

export const { toggleReadonly } = readonlyReducer.actions;

export default readonlyReducer.reducer