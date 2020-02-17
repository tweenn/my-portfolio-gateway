
const bodyParser = require('body-parser');

const config = {
	urlEncoded: {
		extended: true,
		limit: '3mb'
	},
	json: {
		limit: '3mb'
	}
};

module.exports = (app) => {
	app.use('/api', bodyParser.urlencoded(config.urlEncoded));

	app.use('/api', bodyParser.json(config.json));
};
