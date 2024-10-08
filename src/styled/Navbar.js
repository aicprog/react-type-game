import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navbar = styled.nav`
	display: grid;
	grid-template-columns: 1fr auto;
	padding: 20px;
`;

export const NavBrand = styled.div`
	font-size: 1.4rem;
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
	justify-content: center; /* Center horizontally */
	align-items: center;
`;

export const NavLink = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	transition: color 200ms;

	&:hover {
		color: var(--primary);
	}
`;

export const ButtonLink = styled.button`
	border: none;
	font-size: 1.1rem;
	background: transparent;
	cursor: pointer;

	&:hover {
		color: var(--primary);
	}
`;

export const NavSelect = styled.select`
	appearance: none;
	background-color: var(--secondary);
	border: 1px solid #b0c4c8;
	padding: 8px 14px;
	font-size: 14px;
	border-radius: 5px;
	width: 120px;
	outline: none;
	cursor: pointer;
	transition: all 0.3s ease;
	color: var(--onSecondary);

	&:focus {
		border-color: #20c997; /* Modern teal border on focus */
		box-shadow: 0 0 5px rgba(32, 201, 151, 0.5);
	}
`;
