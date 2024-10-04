import { useState, useCallback } from 'react';

function useLoading() {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);


	const withLoading = useCallback(async (asyncFn) => {
		setLoading(true);
		setError(null);
		try {
			const result = await asyncFn();
			return result;
		} catch (err) {
			setError(err);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	return { loading, error, withLoading };
}

export default useLoading;
