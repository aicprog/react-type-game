import React, { useState, useEffect } from 'react';
import { Character, GameContainer, Score, Strong, Timer } from '../styled/Game';
import { useNavigate } from 'react-router-dom';

const Game = ({ history }) => {
	const navigate = useNavigate();
	const [score, setScore] = useState(0);
	const MAX_TIME = 5;
	const [seconds, setSeconds] = useState(0);
	const [ms, setMs] = useState(0);

	useEffect(() => {
		console.log(seconds, MAX_TIME);
		if (seconds <= -1) {
			navigate('/gameOver');
		}
	}, [seconds]);

	useEffect(() => {
		const currentTime = new Date();
		const interval = setInterval(() => updateTime(currentTime), 1);
		return () => clearInterval(interval);
	}, []);

	const updateTime = (startTime) => {
		const endDate = new Date();
		const msPassed = (endDate.getTime() - startTime.getTime()).toString();
		const msFormatted = msPassed.padStart(5, '0').slice(-5);
		const seconds = msFormatted.substring(0, 2);
		const ms = msFormatted.substring(2, 5);
		const secondsLeft = MAX_TIME - parseInt(seconds) - 1;
		const msLeft = 1000 - parseInt(ms);
		setSeconds(secondsLeft.toString().padStart(2, '0').slice(-2));
		setMs(msLeft.toString().padStart(3, '0').slice(-3));
	};

	return (
		<GameContainer>
			<Score>
				Score:<Strong>{score}</Strong>
			</Score>
			<Character>A</Character>
			<Timer>
				Time:{' '}
				<Strong>
					{seconds}:{ms}
				</Strong>
			</Timer>
		</GameContainer>
	);
};

export default Game;
