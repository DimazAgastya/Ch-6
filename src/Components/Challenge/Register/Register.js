import React, { useState } from "react";
import style from "./register.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Register = () => {
	const { register, handleSubmit, formState } = useForm();

	// memberitahu pesan gagal dalam regis

	const [regStatus, setRegStatus] = useState({
		succes: false,
		message: " ",
	});

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log(data);

		//  setup pengiriman data via axios ( hasilnya berupa ascess token)

		const postData = {
			email: data.user_email,
			password: data.user_password,
			isAdmin: false,
		};

		axios
			.post("http://localhost:4000/register", postData) // server nya ON kan dulu sebelumnya
			.then((res) => {
				// memastikan bahhwa token nya ada
				if (typeof res.data.accessToken !== "undefined") {
					// menyimpan di local storage
					localStorage.setItem("carshopAccessToken", res.data.accessToken);
					// menyimpan di redux store
					const user = jwtDecode(res.data.accessToken);
					axios.get(`http://localhost:4000/users/${user.sub}`).then((res) => {});
				}
			})
			.catch((err) => {
				setRegStatus({
					succes: false,
					message: "Oops, something went bad. please try again later",
				});
			});
	};

	return (
		<>
			<div className="row">
				{/* image section */}

				<div className="col-xl-8">
					<img src="/image/image 2.png" alt="" className={style.image_sign_in} />
				</div>

				<div className={`col-xl-4 `}>
					<form onSubmit={handleSubmit(formSubmithandler)}>
						<h1 className={`${style.header_sign_in} ${style.right_sides} `}>Create new Account</h1>

						{/* email section */}
						<div className={style.email_container}>
							<div className="email">
								<label htmlFor="email">Email</label>
							</div>
							<input type="email" placeholder="Contoh: johndee@gmail.com" name="email" id="email" required className={style.box_email} {...register("user_email")} />
							<p>{formState.errors.user_email?.type === "required"}</p>
						</div>

						{/* password section */}
						<div className={style.email_container}>
							<label htmlFor="user_password">Password</label>
							<input type="password" placeholder="6+ karakter" name="user_password" id="user_password" className={style.box_password} required="password" {...register("user_password")} />
							<p>{formState.errors.user_password?.type === "required"} </p>
						</div>
						{/* button submit section */}
						<div className="mb-4">
							<button id="btn-save-modal" type="submit" className={`${style.button_sign_in} d-grid col-11`}>
								Register Account
							</button>
						</div>
						<Link to="/login">already have an account</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default Register;
