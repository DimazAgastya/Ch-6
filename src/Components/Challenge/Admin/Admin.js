import React from "react";
import style from "./admin.module.css";
import { Link } from "react-router-dom";

const Admin = () => {
	return (
		<>
			<div className="main_container">
				<div className="row">
					{/* sidebar start */}
					<div className={`col-lg-1 col-12 ${style.sidebar_container} `}>
						<div id="sidebar">
							<div className={`${style.main_nav} text-center`}>
								<img src="/image/binar.png" alt="sidebar_logo" className={style.sidebar_logo} />
								<div className={`${style.main_nav_itexm} ${style.homepage_home_container}`}>
									<i className={`bx bx-home-alt ${style.home_icon}`}></i>
									<div className="">
										<Link to="#" className={style.home_text}>
											Dashboard
										</Link>
									</div>
								</div>
								<div className={`${style.main_nav_item} ${style.homepage_truck_container}`}>
									<i className={`bx bxs-truck ${style.truck_icon}`}></i>
									<div className="">
										<a href="/cars" className={style.truck_text}>
											Cars
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* expand sidebar start */}
					<div className={`${style.sidebars_expand} col-lg-2 p-0`}>
						<div className={style.expand_logo_container}>
							<img src="/image/binar.png" alt="" className={style.expand_logo} />
						</div>
						<div className={style.expand_title}>
							<h4>Dashboard</h4>
						</div>
						<div className={style.block_sub_title}>
							<h4>Dashboard</h4>
						</div>
					</div>
					{/* navbar start */}
					<div className="col-lg-9 col-12" id="navbar-container">
						<nav className="navbar navbar-light bg-light">
							<div className="container-fluid navigation">
								<button className={style.btn_menu}>
									<Link to="#"></Link>
									<i className="bx bx-menu menu-navbar"></i>
								</button>
								<form className="d-flex">
									<input className={`form-control me-2 searching`} type="search" placeholder="Search" aria-label="Search" />
									<i className="bx bx-search search-icon"></i>
									<button className={`btn ${style.btn_search}`} type="submit">
										Search
									</button>
								</form>
							</div>
						</nav>
						{/* main content start */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Admin;
