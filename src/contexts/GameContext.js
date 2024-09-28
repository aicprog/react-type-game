import React, { useContext, createContext, useState } from 'react';

const GameContext = createContext(null);

//hook so components can access the score context

const useGame = () => useContext(GameContext);

//to wrap around main component
const GameProvider = ({ children }) => {
	const [score, setScore] = useState(-1);
	const [newGame, setNewGame] = useState(false);

	return (
		<GameContext.Provider value={{ score, setScore, newGame, setNewGame }}>
			{children}
		</GameContext.Provider>
	);
};

export { GameProvider, useGame };
