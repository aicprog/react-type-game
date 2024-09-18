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
		<RouterProvider router={router} />
	</React.StrictMode>
);
