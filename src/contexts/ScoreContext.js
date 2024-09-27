import React, { useContext, createContext, useState } from 'react';

const ScoreContext = createContext(-1);

//hook so components can access the score context
const useScore = () => useContext(ScoreContext);

//to wrap around main component
const ScoreProvider = ({ children }) => {
    const [score, setScore] = useState(-1)
	return (
		<ScoreContext.Provider value={[score, setScore]}>
			{children}
		</ScoreContext.Provider>
	);
};


export {ScoreProvider, useScore}