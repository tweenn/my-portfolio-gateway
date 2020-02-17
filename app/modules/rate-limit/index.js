
const cf = require('../../handlers/cloud-foundry');

const limitAPI = require('./api');

module.exports = (app) => {
	if (cf.vcap.is()) {
		app.use('/api', limitAPI);
	}
};
