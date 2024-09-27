const {
	getHighScores: getAllHighScores,
} = require('./utils/airtable');

exports.handler = async function () {
	try {
		const data = await getAllHighScores(true);
		return {
			statusCode: 200,
			body: JSON.stringify(data),
		};
	} catch (err) {
		return {
			statusCode: 500,
			body: JSON.stringify({
				err: `Failed to query records from Airtable: ${err}`,
			}),
		};
	}
};
