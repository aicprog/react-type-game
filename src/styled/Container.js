import styled from 'styled-components';

export const Container = styled.div`
	padding: 20px;
	margin: 0 auto;
	margin-top: 20px;
	max-width: 800px;
`;

export const Flex = styled.div`
	display: flex;
	${({ center }) =>
		center &&
		`
			justify-content: center;
			align-items: center;
		`}
	${({ spaceBetween }) =>
		spaceBetween &&
		`
			justify-content: space-between;
			align-items: center;
		`}
  ${({ flexEnd }) =>
		flexEnd &&
		`
			justify-content: flex-end;
			align-items: center;
		`}
  ${({ gap }) =>
		gap &&
		`
			gap: ${gap};
		`}
  ${({ flexDirection }) =>
		flexDirection &&
		`
			flex-direction: ${flexDirection};
		`}
`;
