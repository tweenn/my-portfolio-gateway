
const secure = require('express-secure-only');

const cf = require('../../handlers/cloud-foundry');

module.exports = (app) => {
	if (cf.vcap.is()) {
		app.use(secure());
	}
};
