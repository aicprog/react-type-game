import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Game from './pages/Game';
import GameOver from './pages/GameOver';
import Home from './pages/Home';

//Routes for pages
const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/game',
		element: <Game />,
	},
	{
		path: '/gameOver',
		element: <GameOver />,
	},
	{
		path: '/home',
		element: <Home />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
