import { useState, useEffect } from 'react';

function useStorage(key, initialValue) {
	// Attain localStorage or use the initialValue if not found
	const [storedValue, setStoredValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error('Error reading localStorage: ', error);
			return initialValue;
		}
	});

	// Update localStorage as value changes
	useEffect(() => {
		try {
			window.localStorage.setItem(key, JSON.stringify(storedValue));
		} catch (error) {
			console.error('Error saving to localStorage: ', error);
		}
	}, [key, storedValue]);

	// Update stored value
	const setValue = (value) => {
		try {
			// Allow value to be a function to match useState's functionality
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			setStoredValue(valueToStore);
		} catch (error) {
			console.error('Error setting value: ', error);
		}
	};

	return [storedValue, setValue];
}

export default useStorage;
