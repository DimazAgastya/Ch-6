import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import User from "./Pages/User";
import Admin from "./Pages/Admin";
import Home from "./Pages/Home";

function App() {
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
