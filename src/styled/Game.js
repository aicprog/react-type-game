import styled, { keyframes, css } from 'styled-components';

export const GameContainer = styled.div`
	height: 75vh;
	max-height: 500px;
	display: grid;
	grid-template-rows: 50px 1fr;
	grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const Score = styled.p`
	font-size: 1.5rem;
	grid-column: 1;
`;
export const Timer = styled.p`
	font-size: 1.5rem;
	grid-column: 3;
`;

export const Sentence = styled.p`
	grid-row: 2;
	grid-column: 1/4;
	text-align: center;
	margin: 64px 0;
`;

const shake = keyframes`
 0% { transform: translateY(0) }
 25% { transform: translateY(5px) }
 50% { transform: translateY(-5px) }
 75% { transform: translateY(5px) }
 100% { transform: translateY(0) }
`;

const flashColor = keyframes`
  0% { color: black; }
  50% { color:#e16365; }
  100% { color: black; }
`;

// Styled component
export const Character = styled.span`
	font-size: 4rem;
	text-align: center;
	color: ${({ currentChar }) => (currentChar ? '#e16365' : '#222222')};
	text-decoration: ${({ currentChar }) => (currentChar ? 'underline' : 'none')};

	${({ incorrectChar }) =>
		incorrectChar &&
		css`
			animation: ${shake} 0.6s ease-in-out, ${flashColor} 0.3s ease-in-out;
			will-change: transform;
			position: relative;
		`}
`;

export const Strong = styled.span`
	font-weight: bold;
`;