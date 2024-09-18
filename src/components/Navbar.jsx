import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar as Nav, NavBrand, NavItems, NavLink } from '../styled/Navbar';
import { Accent } from '../styled/Typography';

const Navbar = () => {
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
			</NavItems>
		</Nav>
	);
};

export default Navbar;
