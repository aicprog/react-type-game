import { useEffect, useState } from 'react';
import useStorage from './useStorage';

export const useTheme = () => {
	const [theme, setTheme] = useStorage('theme', 'light');

	const toggleTheme = (newTheme) => {
		switch (newTheme) {
			case 'light':
				console.log('Light');
				setTheme('light');
				break;
			case 'dark':
				console.log('Dark');
				setTheme('dark');
				break;
			default:
				break;
		}
	};

	return { theme, toggleTheme };
};
