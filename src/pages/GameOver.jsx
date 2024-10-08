import React, { useEffect, useState } from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';
import { useGame } from '../contexts/GameContext';
import { useNavigate } from 'react-router-dom';
import { Sentence } from '../styled/Game';
import { useAuth0 } from '@auth0/auth0-react';

const GameOver = () => {
	const navigate = useNavigate();
	const { score, newGame, setNewGame } = useGame();
	const [scoreMessage, setScoreMessage] = useState('');
	const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();

	useEffect(() => {
		if (!newGame) navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navigate]);

	useEffect(() => {
		const saveHighScore = async () => {
			try {
				const token = await getAccessTokenSilently();
				const options = {
					method: 'POST',
					body: JSON.stringify({ name: user.nickname, score }),
					headers: {
						Authorization: `Bearer ${token}`,
					},
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
				setNewGame(false);
			} catch (err) {
				console.log(`Error: ${err}`);
			}
		};
		newGame && isAuthenticated && saveHighScore();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [score]);

	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Game Over</StyledTitle>
			<p>You scored {score} points!</p>
			{!isAuthenticated && (
				<Sentence>
					To be able to save a high score, please log in or sign up.
				</Sentence>
			)}
			<p>{scoreMessage}</p>
			<Flex gap={'2rem'}>
				<CTA to="/game">Play Again</CTA>
				<CTA to="/highScores">High Scores</CTA>
			</Flex>
		</Flex>
	);
};

export default GameOver;
