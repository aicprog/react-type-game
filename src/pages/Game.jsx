import React from 'react';
import { Character, GameContainer, Score, Strong, Timer } from '../styled/Game';

const Game = () => {
	return (
		<GameContainer>
			<Score>
				Score:<Strong>0</Strong>
			</Score>
			<Character>A</Character>
			<Timer>
				Time: <Strong>00:000</Strong>
			</Timer>
		</GameContainer>
	);
};

export default Game;
