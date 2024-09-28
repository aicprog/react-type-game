import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
	const { isLoading } = useAuth0();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<Main>
			<Global />
			<Container>
				<Navbar />
				<Outlet />
			</Container>
		</Main>
	);
};

export default App;
