import React from 'react';

export const useKeyPress = (
	targetKey,
	onKeyPress = () => {},
	onMissedKeyPress = () => {}
) => {
	const [keyPressed, setKeyPressed] = React.useState(false);

	const handleKeyDown = (event) => {
		if (event.key === targetKey) {
			console.log('Key down detected for:', event.key); // Log key down
			event.preventDefault();
			setKeyPressed(true);
			onKeyPress();
		} else {
			onMissedKeyPress();
		}
	};

	const handleKeyUp = (event) => {
		if (event.key === targetKey) {
			console.log('Key up detected for:', event.key); // Log key up
			event.preventDefault();
		} 
	};

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [targetKey]);

	return keyPressed;
};
