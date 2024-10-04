import React, { useEffect, useState } from 'react';
import { ScoreItem, ScoresList } from '../styled/HighScores';
import { StyledTitle } from '../styled/Typography';
import useLoading from '../hooks/useLoading';
import Loader from '../components/Loader';

const HighScores = () => {
	const [highScores, setHighScores] = useState([]);
	const { loading, error, withLoading } = useLoading();

	useEffect(() => {
		const fetchHighScores = async () => {
			try {
				const res = await fetch('/.netlify/functions/getHighScores');
				const allScores = await res.json();
				setHighScores(allScores);
				console.log(allScores);
			} catch (err) {}
		};

		withLoading(fetchHighScores);
	}, [withLoading]);

	if (loading) {
		return <Loader />;
	}

	return (
		<div>
			<StyledTitle>HighScores</StyledTitle>
			<ScoresList>
				{highScores.map((score) => {
					return (
						<ScoreItem key={score.id}>
							{score.fields.name} - {score.fields.score}
						</ScoreItem>
					);
				})}
			</ScoresList>
		</div>
	);
};

export default HighScores;
