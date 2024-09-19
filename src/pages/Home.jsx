import React from 'react';
import { CTA } from '../styled/Links';
import { Flex } from '../styled/Container';
import { StyledTitle } from '../styled/Typography';

const Home = () => {
	return (
		<Flex center flexDirection={'column'}>
			<StyledTitle>Ready to play?</StyledTitle>
			<CTA to="/game">Click to start!</CTA>
		</Flex>
	);
};

export default Home;
