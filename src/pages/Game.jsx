import React, { useState, useEffect } from 'react';
import {
	Character,
	GameContainer,
	Score,
	Sentence,
	Strong,
	Timer,
} from '../styled/Game';
import { useNavigate } from 'react-router-dom';
import { useKeyPress } from '../hooks/useKeyPress';
import { useGame } from '../contexts/GameContext';
import { sentences } from '../../functions/utils/constants';

const MAX_SECONDS = 60;

const Game = () => {
	const navigate = useNavigate();
	const { score, setScore, setNewGame } = useGame();
	const [sentenceIndex, setSentenceIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [incorrectChar, setIncorrectChar] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [ms, setMs] = useState(0);

	const currentSentence = sentences[sentenceIndex].split('');
	const currentChar = currentSentence[charIndex];

	useKeyPress(
		currentChar,
		() => {
			setCharIndex((oldIndx) => oldIndx + 1);
			setScore((prevScore) => prevScore + 1);
			if (charIndex === currentSentence.length - 1) {
				setCharIndex(0);
				setSentenceIndex(Math.floor(Math.random() * sentences.length));
			}
		},
		() => {
			setIncorrectChar(true);
		}
	);

	useEffect(() => {
		setNewGame(true);
	}, [setNewGame]);

	useEffect(() => {
		if (seconds <= -1) navigate('/gameOver');
		setIncorrectChar(false);
	}, [seconds, navigate]);

	useEffect(() => {
		setScore(0);
		const currentTime = new Date();
		const interval = setInterval(() => updateTime(currentTime), 1);
		setSentenceIndex(Math.floor(Math.random() * sentences.length));
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const updateTime = (startTime) => {
		const endDate = new Date();
		const msPassed = (endDate.getTime() - startTime.getTime()).toString();
		const msFormatted = msPassed.padStart(5, '0').slice(-5);
		const seconds = msFormatted.substring(0, 2);
		const ms = msFormatted.substring(2, 5);
		const secondsLeft = MAX_SECONDS - parseInt(seconds) - 1;
		const msLeft = 1000 - parseInt(ms);
		setSeconds(secondsLeft.toString().padStart(2, '0').slice(-2));
		setMs(msLeft.toString().padStart(3, '0').slice(-3));
	};

	return (
		<GameContainer>
			<Score>
				Score:<Strong>{score}</Strong>
			</Score>
			<Sentence>
				{currentSentence.map((char, index) => {
					return (
						<Character
							key={index}
							currentChar={currentChar === char && charIndex === index}
							incorrectChar={incorrectChar && charIndex === index}
						>
							{char}
							{char === ' ' && '\u00A0'}
						</Character>
					);
				})}
			</Sentence>

			<Timer>
				Time:
				<Strong>
					{seconds}:{ms}
				</Strong>
			</Timer>
		</GameContainer>
	);
};

export default Game;
