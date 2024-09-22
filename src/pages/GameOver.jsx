import React, { useEffect } from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';
import { useScore } from '../contexts/ScoreContext';
import { useNavigate } from 'react-router-dom';

const GameOver = () => {
	const navigate = useNavigate();
	const [score] = useScore();

	useEffect(() => {
		if (score === -1) navigate('/');
	}, [navigate]);

	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Game Over</StyledTitle>
			<p>{score}</p>
			<CTA to="/game">Go Home</CTA>
			<CTA to="/game">Play Again?</CTA>
		</Flex>
	);
};

export default GameOver;
