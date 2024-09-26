import React, { useEffect } from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';
import { useScore } from '../contexts/ScoreContext';
import { useNavigate } from 'react-router-dom';
import { Sentence } from '../styled/Game';

const GameOver = () => {
	const navigate = useNavigate();
	const [score] = useScore();

	useEffect(() => {
		if (score === -1) navigate('/');
	}, [score, navigate]);

	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Game Over</StyledTitle>
			<Sentence>You scored {score} points!</Sentence>
			<Flex gap={'2rem'}>
				<CTA to="/">Go Home</CTA>
				<CTA to="/game">Play Again</CTA>
			</Flex>
		</Flex>
	);
};

export default GameOver;
