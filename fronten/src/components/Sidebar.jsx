// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';

// // const Sidebar = () => {
// // 	return (
// // 		<div className="side mt-3 ms-3 sticky" style={{ width: 130 }}>
// // 			<button
// // 				class="btn btn-danger"
// // 				type="button"
// // 				data-bs-toggle="offcanvas"
// // 				data-bs-target="#offcanvasScrolling"
// // 				aria-controls="offcanvasScrolling"
// // 			>
// // 				Fitures
// // 			</button>

// // 			<div
// // 				class="offcanvas offcanvas-start p-3"
// // 				data-bs-scroll="true"
// // 				data-bs-backdrop="false"
// // 				tabindex="-1"
// // 				id="offcanvasScrolling"
// // 				aria-labelledby="offcanvasScrollingLabel"
// // 			>
// // 				<div class="offcanvas-header">
// // 					<h5 class="offcanvas-title" id="offcanvasScrollingLabel">
// // 						Fitures
// // 					</h5>
// // 					<button
// // 						type="button"
// // 						class="btn-close"
// // 						data-bs-dismiss="offcanvas"
// // 						aria-label="Close"
// // 					></button>
// // 				</div>
// // 				<div class="offcanvas-body container-sm" style={{ bgcolor: '#403E44' }}>
// // 					<div className="general">
// // 						General
// // 						<ul>
// // 							<li className="list-group-item py-3">
// // 								<NavLink
// // 									to={'/dashboard'}
// // 									style={{ color: 'black', textDecoration: 'none' }}
// // 								>
// // 									{' '}
// // 									<IoHome /> Dashboard
// // 								</NavLink>
// // 							</li>
// // 							<li className="list-group-item">
// // 								<NavLink
// // 									to={'/products'}
// // 									style={{ color: 'black', textDecoration: 'none' }}
// // 								>
// // 									<IoPricetag /> Data
// // 								</NavLink>
// // 							</li>
// // 						</ul>
// // 					</div>
// // 					<div className="Admin">
// // 						Admin
// // 						<ul>
// // 							<li className="list-group-item py-2">
// // 								<NavLink
// // 									to={'/users'}
// // 									style={{ color: 'black', textDecoration: 'none' }}
// // 								>
// // 									<IoPerson /> Users
// // 								</NavLink>
// // 							</li>
// // 						</ul>
// // 					</div>
// // 					<div className="other">
// // 						Other
// // 						<ul>
// // 							<li className="list-group-item py-2">
// // 								<NavLink
// // 									to={'/logout'}
// // 									style={{ color: 'black', textDecoration: 'none' }}
// // 								>
// // 									<IoLogOut /> Logout
// // 								</NavLink>
// // 							</li>
// // 						</ul>
// // 					</div>
// // 				</div>
// // 			</div>
// // 		</div>
// // 	);
// // };

// // export default Sidebar;

// import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';
// import { useDispatch, useSelector } from 'react-redux';
// import { LogOut, reset } from '../features/authSlice';
// import Welcome from './Welcome';

// const Sidebar = () => {
// 	const dispatch = useDispatch();
// 	const navigate = useNavigate();
// 	const { user } = useSelector((state) => state.auth);

// 	const logout = () => {
// 		dispatch(LogOut());
// 		dispatch(reset());
// 		navigate('/');
// 	};
// 	return (
// 		// <div>
// 		// 	<aside className="menu pl-2 has-shadow">
// 		// 		<p className="menu-label">General</p>
// 		// 		<ul className="menu-list">
// 		// 			<li>
// 		// 				<NavLink to={'/dashboard'}>Dashboard</NavLink>
// 		// 			</li>
// 		// 			<li>
// 		// 				<NavLink to={'/products'}>Products</NavLink>
// 		// 			</li>
// 		// 		</ul>
// 		// 		{user && user.role === 'Admin' && (
// 		// 			<div>
// 		// 				<p className="menu-label">Admin</p>
// 		// 				<ul className="menu-list">
// 		// 					<li>
// 		// 						<NavLink to={'/users'}>Users</NavLink>
// 		// 					</li>
// 		// 				</ul>
// 		// 			</div>
// 		// 		)}

// 		// 		<p className="menu-label">Other</p>
// 		// 		<ul className="menu-list">
// 		// 			<button>
// 		// 				<a onClick={logout} className="button is-white">
// 		// 					Log out
// 		// 				</a>
// 		// 			</button>
// 		// 		</ul>
// 		// 	</aside>
// 		// </div>

// 		// <div>
// 		// 	<button
// 		// 		class="btn btn-primary"
// 		// 		type="button"
// 		// 		data-bs-toggle="offcanvas"
// 		// 		data-bs-target="#offcanvasScrolling"
// 		// 		aria-controls="offcanvasScrolling"
// 		// 	>
// 		// 		Enable body scrolling
// 		// 	</button>

// 		// 	<div
// 		// 		class="offcanvas offcanvas-start"
// 		// 		data-bs-scroll="true"
// 		// 		data-bs-backdrop="false"
// 		// 		tabindex="-1"
// 		// 		id="offcanvasScrolling"
// 		// 		aria-labelledby="offcanvasScrollingLabel"
// 		// 	>
// 		// 		<div class="offcanvas-header">
// 		// 			<h5 class="offcanvas-title" id="offcanvasScrollingLabel">
// 		// 				Offcanvas with body scrolling
// 		// 			</h5>
// 		// 			<button
// 		// 				type="button"
// 		// 				class="btn-close"
// 		// 				data-bs-dismiss="offcanvas"
// 		// 				aria-label="Close"
// 		// 			></button>
// 		// 		</div>
// 		// 		<div class="offcanvas-body">
// 		// 			<p>
// 		// 				Try scrolling the rest of the page to see this option in action.
// 		// 			</p>
// 		// 		</div>
// 		// 	</div>
// 		// </div>
// 		// <div
// 		// 	class="offcanvas offcanvas-start sidebar-nav bg-dark mt-5"
// 		// 	tabindex="-1"
// 		// 	id="sidebar"
// 		// >

// 		// 	<div class="offcanvas-body p-0">
// 		// 		<nav class="navbar-dark">
// 		// 			<ul class="navbar-nav">
// 		// 				<li>
// 		// 					<div class="text-muted small fw-bold text-uppercase px-3">
// 		// 						CORE
// 		// 					</div>
// 		// 				</li>
// 		// 				<li>
// 		// 					<a href="#" class="nav-link px-3 active">
// 		// 						<span class="me-2">
// 		// 							<i class="bi bi-speedometer2"></i>
// 		// 						</span>
// 		// 						<span>Dashboard</span>
// 		// 					</a>
// 		// 				</li>
// 		// 				<li class="my-4">
// 		// 					<hr class="dropdown-divider bg-light" />
// 		// 				</li>
// 		// 				<li>
// 		// 					<div class="text-muted small fw-bold text-uppercase px-3 mb-3">
// 		// 						Interface
// 		// 					</div>
// 		// 				</li>
// 		// 				<li>
// 		// 					<a
// 		// 						class="nav-link px-3 sidebar-link"
// 		// 						data-bs-toggle="collapse"
// 		// 						href="#layouts"
// 		// 					>
// 		// 						<span class="me-2">
// 		// 							<i class="bi bi-layout-split"></i>
// 		// 						</span>
// 		// 						<span>Layouts</span>
// 		// 						<span class="ms-auto">
// 		// 							<span class="right-icon">
// 		// 								<i class="bi bi-chevron-down"></i>
// 		// 							</span>
// 		// 						</span>
// 		// 					</a>
// 		// 					<div class="collapse" id="layouts">
// 		// 						<ul class="navbar-nav ps-3">
// 		// 							<li>
// 		// 								<a href="#" class="nav-link px-3">
// 		// 									<span class="me-2">
// 		// 										<i class="bi bi-speedometer2"></i>
// 		// 									</span>
// 		// 									<span>Dashboard</span>
// 		// 								</a>
// 		// 							</li>
// 		// 						</ul>
// 		// 					</div>
// 		// 				</li>
// 		// 				<li>
// 		// 					<a href="#" class="nav-link px-3">
// 		// 						<span class="me-2">
// 		// 							<i class="bi bi-book-fill"></i>
// 		// 						</span>
// 		// 						<span>Pages</span>
// 		// 					</a>
// 		// 				</li>
// 		// 				<li class="my-4">
// 		// 					<hr class="dropdown-divider bg-light" />
// 		// 				</li>
// 		// 				<li>
// 		// 					<div class="text-muted small fw-bold text-uppercase px-3 mb-3">
// 		// 						Addons
// 		// 					</div>
// 		// 				</li>
// 		// 				<li>
// 		// 					<a href="#" class="nav-link px-3">
// 		// 						<span class="me-2">
// 		// 							<i class="bi bi-graph-up"></i>
// 		// 						</span>
// 		// 						<span>Charts</span>
// 		// 					</a>
// 		// 				</li>
// 		// 				<li>
// 		// 					<a href="#" class="nav-link px-3">
// 		// 						<span class="me-2">
// 		// 							<i class="bi bi-table"></i>
// 		// 						</span>
// 		// 						<span>Tables</span>
// 		// 					</a>
// 		// 				</li>
// 		// 			</ul>
// 		// 		</nav>
// 		// 	</div>
// 		// </div>

// 		<div className="row no-grutters mt-5">
// 			<div className="col-md-2 bg-dark mt-2 pr-3 pt-4">
// 				<ul class="nav flex-column ms-3 mb-5">
// 					<li class="nav-item pb-2 text-white">
// 						<NavLink
// 							to={'/dashboard'}
// 							className="nav-link active text-white"
// 							aria-current="page"
// 						>
// 							Dashboard
// 						</NavLink>
// 					</li>
// 					<li className="nav-item pb-2">
// 						<NavLink to={'/products'} className="nav-link text-white">
// 							Link
// 						</NavLink>
// 					</li>
// 					<li className="nav-item pb-2">
// 						<NavLink to={'/users'} className="nav-link text-white">
// 							Users
// 						</NavLink>
// 					</li>
// 					<form action="">
// 						<button
// 							onClick={logout}
// 							type="submit"
// 							className="btn btn-primary mt-2 mb-2"
// 						>
// 							Logout
// 						</button>
// 					</form>
// 				</ul>
// 			</div>
// 			<div className="col-md-10">
// 				<Welcome/>
// 			</div>
// 		</div>
// 	);
// };

// export default Sidebar;
// // const Sidebar = () => {
// // 	const dispatch = useDispatch();
// // 	const navigate = useNavigate();
// // 	const { user } = useSelector((state) => state.auth);

// // 	const logout = () => {
// // 		dispatch(LogOut());
// // 		dispatch(reset());
// // 		navigate('/');
// // 	};

// // 	return (
// // 		<div>
// // 			<aside className="menu pl-2 has-shadow">
// // 				<p className="menu-label">General</p>
// // 				<ul className="menu-list">
// // 					<li>
// // 						<NavLink to={'/dashboard'}>
// // 							<IoHome /> Dashboard
// // 						</NavLink>
// // 					</li>
// // 					<li>
// // 						<NavLink to={'/products'}>
// // 							<IoPricetag /> Products
// // 						</NavLink>
// // 					</li>
// // 				</ul>
// // 				{user && user.role === 'admin' && (
// // 					<div>
// // 						<p className="menu-label">Admin</p>
// // 						<ul className="menu-list">
// // 							<li>
// // 								<NavLink to={'/users'}>
// // 									<IoPerson /> Users
// // 								</NavLink>
// // 							</li>
// // 						</ul>
// // 					</div>
// // 				)}

// // 				<p className="menu-label">Settings</p>
// // 				<ul className="menu-list">
// // 					<li>
// // 						<button onClick={logout} className="button is-white">
// // 							<IoLogOut /> Logout
// // 						</button>
// // 					</li>
// // 				</ul>
// // 			</aside>
// // 		</div>
// // 	);
// // };

import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoPerson, IoPricetag, IoHome, IoLogOut } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate('/');
	};

	return (
		<div className="">
			<aside className="menu pl-2 has-shadow">
				<p className="menu-label">General</p>
				<ul className="menu-list">
					<li>
						<NavLink to={'/dashboard'} className=" has-text-primary-dark"> 
							<IoHome /> Dashboard
						</NavLink>
					</li>
					<li>
						<NavLink to={'/products'} className="has-text-primary-dark">
							<IoPricetag /> Penjualan
						</NavLink>
					</li>
				</ul>
				{/* {user && user.role === 'Admin' && (
					<div>

					</div>
				)} */}
						{/* <p className="menu-label">Admin</p>

										<ul className="menu-list">
							<li>
								<NavLink to={'/users'}>
									<IoPerson /> Users
								</NavLink>
							</li>
						</ul> */}
				<p className="menu-label">Settings</p>
				<ul className="menu-list">
					<li>
						<button onClick={logout} className="button is-info">
							<IoLogOut /> Logout
						</button>
					</li>
				</ul>
			</aside>
		</div>
	);
};

export default Sidebar;
