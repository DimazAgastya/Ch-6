import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";
import axios from "axios";
import { useDispatch } from "react-redux";
import userSlice from "./Components/Challenge/store/userSlice";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const token = localStorage.getItem("carShopAccessToken");
		const userData = jwtDecode(token);

		axios.get(`http://localhost:4000/users/${userData.sub}`).then((res) => {
			dispatch(userSlice.actions.addUser({ userData: res.data }));
		});
	}, []);

	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/user" element={<User />} />
		</Routes>
	);
}

export default App;
