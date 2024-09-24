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
import { useScore } from '../contexts/ScoreContext';

const sentences = [
	'The sun set over the mountains, casting a warm golden glow.',
	'She quickly realized that the key was missing from her bag.',
	'The cat curled up in the chair and fell fast asleep.',
	'He spent the afternoon organizing his bookshelf by color.',
	'The concert was loud and energetic, with the crowd singing along.',
	'The smell of freshly baked bread filled the entire house.',
	'They hiked up the trail, stopping occasionally to admire the view.',
	'The rain tapped gently on the windows as the storm rolled in.',
	'She smiled when she saw her favorite flowers blooming in the garden.',
	'The coffee shop was quiet, except for the sound of typing on laptops.',
];

const MAX_SECONDS = 60;

const Game = () => {
	const navigate = useNavigate();
	const [score, setScore] = useScore();
	const [sentenceIndex, setSentenceIndex] = useState(0);
	const [charIndex, setCharIndex] = useState(0);
	const [incorrectChar, setIncorrectChar] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [ms, setMs] = useState(0);

	const currentSentence = sentences[sentenceIndex].split('');
	const currentChar = currentSentence[charIndex];

	const _ = useKeyPress(
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
		if (seconds <= -1) navigate('/gameOver');
		setIncorrectChar(false);
	}, [seconds, navigate]);

	useEffect(() => {
		setScore(0);
		const currentTime = new Date();
		const interval = setInterval(() => updateTime(currentTime), 1);
		setSentenceIndex(Math.floor(Math.random() * sentences.length));
		return () => clearInterval(interval);
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
