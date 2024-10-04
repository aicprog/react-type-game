import styled, { keyframes } from 'styled-components';

const spin = keyframes`  
 0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fade = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const LoadingWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: var(--bg-color);
`;

export const SpinnerContainer = styled.div`
	position: relative;
	width: 120px;
	height: 120px;
`;

export const Spinner = styled.div`
	border: 16px solid #f3f3f3;
	border-top: 16px solid var(--primary);
	border-radius: 50%;
	width: 100%;
	height: 100%;
	animation: ${spin} 2s linear infinite;
`;

export const LoadingText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 1 em;
	color: var(--on-background);
	animation: ${fade} 2s ease-in-out infinite;
	z-index: 1;
`;
