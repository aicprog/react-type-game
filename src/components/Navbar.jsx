import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Nav, NavBrand, NavItems, NavLink } from '../styled/Navbar';
import { Accent } from '../styled/Typography';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
	const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

	return (
		<Nav>
			<NavBrand>
				<Link to="/">
					Type<Accent>&</Accent>Play
				</Link>
			</NavBrand>
			<NavItems>
				<li>
					<NavLink to="/">Home</NavLink>
				</li>
				<li>
					<NavLink to="/highScores">HighScores</NavLink>
				</li>
				{!isAuthenticated && (
					<li>
						<button onClick={() => loginWithRedirect()}>Log In</button>
					</li>
				)}
				{isAuthenticated && (
					<li>
						<button
							onClick={() =>
								logout({ logoutParams: { returnTo: window.location.origin } })
							}
						>
							Log Out
						</button>
					</li>
				)}
			</NavItems>
		</Nav>
	);
};

export default Navbar;
