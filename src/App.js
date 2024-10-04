import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { GlobalStyle } from './styled/Global';
import { useAuth0 } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import { themes } from './styled/Themes';
import { useTheme } from './hooks/useTheme';
import Loader from './components/Loader';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	const { isLoading } = useAuth0();
	if (isLoading) {
		return (
			<ThemeProvider theme={themes[theme]}>
				<GlobalStyle />
				<Loader/>
			</ThemeProvider>
		);
	}
	return (
		<ThemeProvider theme={themes[theme]}>
			<Main>
				<GlobalStyle />
				<Container>
					<Navbar theme={theme} toggleTheme={toggleTheme} />
					<Outlet />
				</Container>
			</Main>
		</ThemeProvider>
	);
};

export default App;
