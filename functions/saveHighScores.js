const {
	table: tableSave,
	getHighScores: getHighScoresData,
} = require('./utils/airtable');
const {
	getAccessTokenFromHeader: getAccessToken,
	validateAccessToken: validateToken,
} = require('./utils/auth');

exports.handler = async function (event) {
	const token = getAccessToken(event.headers);
	const user = await validateToken(token);
	console.log("User: ", user)
	if (!user)
		return {
			statusCode: 401,
			body: JSON.stringify({ err: 'Unauthorized' }),
		};

	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ err: 'That method is not allowed' }),
		};
	}

	const { score, name } = JSON.parse(event.body);
	if (score === null || score === -1 || !name === null) {
		return {
			statusCode: 400,
			body: JSON.stringify({ err: 'Bad request or incomplete data' }),
		};
	}
	try {
		console.log(event.headers);
		const data = await getHighScoresData(false);
		const lowestRecord = data[data.length - 1];
		const noLowestScore = typeof lowestRecord.fields.score === 'undefined';
		if (noLowestScore || score > lowestRecord.fields.score) {
			const updatedRecord = { id: lowestRecord.id, fields: { name, score } };
			await tableSave.update([updatedRecord]);
			return {
				statusCode: 200,
				body: JSON.stringify(updatedRecord),
			};
		} else {
			return {
				statusCode: 200,
				body: JSON.stringify({}),
			};
		}
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				err: `Failed to save record in Airtable: ${err}`,
			}),
		};
	}
};
