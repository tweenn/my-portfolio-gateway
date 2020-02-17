
const cf = require('../../handlers/cloud-foundry');

const createServer = (app) => {
	if (cf.vcap.is()) {
		return require('./http.js')(app);
	} else {
		return require('./https.js')(app);
	}
};

module.exports = createServer;
