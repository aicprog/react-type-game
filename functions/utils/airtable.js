require('dotenv').config();

const Airtable = require('airtable');

const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_API_BASE);

const airtable = base.table(process.env.AIRTABLE_TABLE);

const getHighScores = async (filterEmptyRecords) => {
	let queryOptions = {
		maxRecords: 10,
		view: 'Grid view',
		sort: [{ field: 'score', direction: 'desc' }],
	};

	if (filterEmptyRecords) {
		queryOptions['filterByFormula'] = `AND(name != '', score > 0)`;
	}
	const records = await airtable.select(queryOptions).firstPage();
	const data = records.map((record) => ({
		id: record.id,
		fields: record.fields,
	}));
	return data;
};

module.exports = {
	table: airtable,
	getHighScores,
};
