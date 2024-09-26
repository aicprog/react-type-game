import React, { useCallback } from 'react';

export const useKeyPress = (
	targetKey,
	onKeyPress = () => {},
	onMissedKeyPress = () => {}
) => {
	const [keyPressed, setKeyPressed] = React.useState(false);

	const handleKeyDown = useCallback(
		(event) => {
			if (event.key === targetKey) {
				console.log('Key down detected for:', event.key); // Log key down
				event.preventDefault();
				setKeyPressed(true);
				onKeyPress();
			} else {
				onMissedKeyPress();
			}
		},
		[targetKey, onKeyPress, onMissedKeyPress]
	);

	const handleKeyUp = useCallback((event) => {
		if (event.key === targetKey) {
			console.log('Key up detected for:', event.key); // Log key up
			event.preventDefault();
		}
	}, [targetKey])

	React.useEffect(() => {
		window.addEventListener('keydown', handleKeyDown);
		window.addEventListener('keyup', handleKeyUp);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
			window.removeEventListener('keyup', handleKeyUp);
		};
	}, [handleKeyDown, handleKeyUp]);

	return keyPressed;
};
