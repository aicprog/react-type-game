import styled from 'styled-components';

export const GameContainer = styled.div`
	height: 75vh;
	max-height: 500px;
	display: grid;
	grid-template-rows: 50px 1fr;
	grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const Score = styled.p`
	font-size: 1.5rem;
    grid-column: 1
`;
export const Timer = styled.p`
	font-size: 1.5rem;
    grid-column: 3 ;
`;
export const Character = styled.p`
	font-size: 10rem;
	grid-row: 2;
	grid-column: 1/4;
	text-align: center;
	color: #e16365;
`;

export const Strong = styled.span`
	font-weight: bold;
`;