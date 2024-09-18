import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
	display: grid;
	grid-template-columns: 1fr auto;
	padding: 20px;
`;

export const NavBrand = styled.div`
	font-size: 1.4;
	& > a {
		text-decoration: none;
	}
`;

export const NavItems = styled.ul`
	list-style: none;
	padding-left: 0;
	display: grid;
	grid-auto-flow: column;
	grid-gap: 20px;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	transition: color 200ms;

	&:hover {
		color: #e16365;
	}
`;
