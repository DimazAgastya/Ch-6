import React from "react";
import style from "./login.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
	const { register, handleSubmit, formState } = useForm();

	//menampilkan data  email dan password

	const formSubmithandler = (data) => {
		console.log(data);

		//  setup pengiriman data via axios ( hasilnya berupa ascess token)

		const postData = {
			email: data.user_email,
			password: data.user_password,
		};

		axios
			.post("http://localhost:4000/login", postData) // server nya ON kan dulu sebelumnya
			.then((res) => {
				localStorage.setItem("token", res.data.accessToken);
			})
			.catch((err) => {
				console.log(err.response);
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
							<Link to="#">
								<button id="btn-save-modal" type="submit" className={`${style.button_sign_in} d-grid col-11`}>
									LOGIN
								</button>
							</Link>
						</div>
						<Link to="/register">create new account</Link>
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
