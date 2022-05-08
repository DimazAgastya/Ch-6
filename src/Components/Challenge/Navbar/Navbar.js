import React, { useState } from "react";
import style from "./navbar.module.css";
import sharedStyle from "../User/additional.module.css";
import { Link } from "react-router-dom";
import jwtDecode from "jwt-decode";
import "bootstrap/js/src/collapse.js";

const Navigation = () => {
	// mengambil tokend dari localstorage
	const jwtToken = localStorage.getItem("token");

	// melakukan decode terhadap jwt token
	const [user, Setuser] = useState(jwtDecode(jwtToken));

	return (
		<>
			<header>
				<nav className={`navbar navbar-expand-lg navbar-light ${style.navbar_bg}`}>
					<div className="container-fluid navbar-container">
						<Link to="#" className="navbar-brand navbar_left">
							<img src="/image/binar.png" alt="binarlogo" className={style.image_navbar} />
							<div className="mx-4 mt-2">{user.email}</div>
						</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className={`collapse navbar-collapse ${style.navbar_groups}`} id="navbarNavAltMarkup">
							<div className="navbar-nav">
								<Link to="#" className="nav-link active" href="#">
									Our service <span className="sr-only"></span>
								</Link>
								<Link to="#" className="nav-link active" href="#">
									Why Us
								</Link>
								<Link to="#" className="nav-link active" href="#">
									Testimonial
								</Link>
								<Link to="#" className="nav-link active" href="#">
									FAQ
								</Link>
								<button className={`${sharedStyle.buttons} ${style.btn_navbar}`}>Register</button>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export default Navigation;
