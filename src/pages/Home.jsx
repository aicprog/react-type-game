import React from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';
import { Sentence } from '../styled/Game';

const Home = () => {
	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Ready to play?</StyledTitle>
			<Sentence>
				Test your typing skills in this fast-paced game! You have 60 seconds to
				rack up as many points as you can by typing the correct characters. See
				if you can make the top 10 leaderboard. To save a high score,
				remember to log in first. Stay focused, type fast, and see how high you
				can score!
			</Sentence>
			<CTA to="/game">Click to start!</CTA>
		</Flex>
	);
};

export default Home;
