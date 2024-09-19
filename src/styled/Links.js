import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CTA = styled(Link)`
	display: flex;
	font-size: 1.5rem;
	width: 200px;
	justify-content: center;
	align-items: center;
	text-decoration: none;
	padding: 16px;
	background-color: #ae7946;
	color: #fff;
	border-radius: 4px;
	transition: background-color 200ms;

	&:hover {
		background-color: #e6852a;
	}
`;
