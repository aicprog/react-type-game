import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import Global from './styled/Global';

const App = () => {
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
