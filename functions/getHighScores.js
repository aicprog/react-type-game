require('dotenv').config();

const Airtable = require('airtable');

const base = new Airtable({
	apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_API_BASE);

const table = base.table(process.env.AIRTABLE_TABLE);

exports.handler = async function () {
	try {
		const records = await table
			.select({
				maxRecords: 10,
				view: 'Grid view',
			})
			.firstPage();
		const data = records.map((record) => ({
			id: record.id,
			fields: record.fields,
		}));

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