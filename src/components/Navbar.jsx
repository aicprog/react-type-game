import React from 'react';
import { Link } from 'react-router-dom';
import {
	ButtonLink,
	Navbar as Nav,
	NavBrand,
	NavItems,
	NavLink,
	NavSelect,
} from '../styled/Navbar';
import { Accent } from '../styled/Typography';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ theme, toggleTheme }) => {
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
						<ButtonLink onClick={() => loginWithRedirect()}>Log In</ButtonLink>
					</li>
				)}
				{isAuthenticated && (
					<li>
						<ButtonLink
							onClick={() =>
								logout({ logoutParams: { returnTo: window.location.origin } })
							}
						>
							Log Out
						</ButtonLink>
					</li>
				)}
				<NavSelect
					name="theme-select"
					id="theme-select"
					value={theme}
					onChange={(e) => toggleTheme(e.target.value)}
				>
					<option value="light">Light Theme</option>
					<option value="dark">Dark Theme</option>
				</NavSelect>
			</NavItems>
		</Nav>
	);
};

export default Navbar;
