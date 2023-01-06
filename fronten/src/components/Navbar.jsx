import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';

const Navbar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate('/');
	};

	return (
		<div>
			{/* has-background-grey-light */}
			<nav
				className="navbar is-fixed-top has-shadow "
				role="navigation"
				aria-label="main navigation"
			>
				<div className="navbar-brand has-background-dark">
					<NavLink
						to="/dashboard"
						className="navbar-item"
					>
						<h3 className="title has-text-info" ><span className=''>Salse</span> History</h3>
					</NavLink> 
				</div>

				<div id="navbarBasicExample" className="navbar-menu has-background-dark">
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<button onClick={logout} className="button is-link">
									Log out
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
