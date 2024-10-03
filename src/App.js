import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Container } from './styled/Container';
import { Main } from './styled/Main';
import { GlobalStyle } from './styled/Global';
import { useAuth0 } from '@auth0/auth0-react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, themes } from './styled/Themes';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const { theme, toggleTheme } = useTheme();
	const { isLoading } = useAuth0();
	if (isLoading) {
		return <div>Loading...</div>;
	}
	console.log(theme,  themes[theme]);
	return (
		<ThemeProvider theme={themes[theme]}>
			<Main>
				<GlobalStyle />
				<Container>
					<Navbar theme={theme} toggleTheme={toggleTheme}/>
					<Outlet />
				</Container>
			</Main>
		</ThemeProvider>
	);
};

export default App;
