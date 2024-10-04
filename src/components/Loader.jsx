import React from 'react';
import { LoadingWrapper, SpinnerContainer, Spinner, LoadingText } from '../styled/Loader';

const Loader = () => {
	return (
		<LoadingWrapper>
			<SpinnerContainer>
				<LoadingText>Loading...</LoadingText>
				<Spinner />
			</SpinnerContainer>
		</LoadingWrapper>
	);
};

export default Loader;
