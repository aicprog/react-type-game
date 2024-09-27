import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Home from './pages/Home';
import HighScores from './pages/HighScores';
import ErrorPage from './pages/Error';
import { ScoreProvider } from './contexts/ScoreContext';
import { Auth0Provider } from '@auth0/auth0-react';
import config from './auth_config.json';

//Routes for pages
const router = createBrowserRouter([
	{
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/highScores',
				element: <HighScores />,
			},
			{
				path: '/game',
				element: <Game />,
			},
			{
				path: '/gameOver',
				element: <GameOver />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={config.domain}
			clientId={config.clientId}
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<ScoreProvider>
				<RouterProvider router={router} />
			</ScoreProvider>
		</Auth0Provider>
	</React.StrictMode>
);
