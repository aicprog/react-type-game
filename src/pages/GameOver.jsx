import React, { useEffect, useState } from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';
import { useScore } from '../contexts/ScoreContext';
import { useNavigate } from 'react-router-dom';
import { Sentence } from '../styled/Game';

const GameOver = () => {
	const navigate = useNavigate();
	const [score] = useScore();
	const [scoreMessage, setScoreMessage] = useState(false);

	useEffect(() => {
		if (score === -1) navigate('/');
	}, [score, navigate]);

	useEffect(() => {
		const saveHighScore = async () => {
			try {
				const options = {
					method: 'POST',
					body: JSON.stringify({ name: 'Anon10', score }),
				};
				const res = await fetch('/.netlify/functions/saveHighScores', options);
				const data = await res.json();
				const highScorer = data?.id;
				highScorer
					? setScoreMessage(
							"Well done! You've secured a spot in the top 10 high scores!"
					  )
					: setScoreMessage(
							'Sorry you did not get a high score this time. Keep trying and play again!'
					  );
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};

		score !== -1 && saveHighScore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Game Over</StyledTitle>
			<Sentence>You scored {score} points!</Sentence>
			<Sentence>{scoreMessage}</Sentence>
			<Flex gap={'2rem'}>
				<CTA to="/">Go Home</CTA>
				<CTA to="/game">Play Again</CTA>
			</Flex>
		</Flex>
	);
};

export default GameOver;
