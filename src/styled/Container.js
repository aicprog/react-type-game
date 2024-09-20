import styled, { css } from 'styled-components';

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
		css`
			justify-content: center;
			align-items: center;
		`}
	${({ spaceBetween }) =>
		spaceBetween &&
		css`
			justify-content: space-between;
			align-items: center;
		`}
  ${({ flexEnd }) =>
		flexEnd &&
		css`
			justify-content: flex-end;
			align-items: center;
		`}
  ${({ gap }) =>
		gap &&
		css`
			gap: ${gap};
		`}
  ${({ flexDirection }) =>
		flexDirection &&
		css`
			flex-direction: ${flexDirection};
		`}
`;
