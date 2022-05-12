import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		data: null,
	},
	reducers: {
		// dipakai saat user login dan register
		addUser: (state, action) => {
			state.data = { ...action.payload.userData };
		},
		// logout fitur

		removeUser: (state) => {
			state.data = null;
		},
	},
});

export default userSlice;
