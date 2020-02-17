const serverAnswer = require('../../handlers/server-answer');

const errorHandler = (err, req, res, next) => {
	if (err) {
		serverAnswer.json.fatalError(res, err);
	} else {
		next();
	}
};

module.exports = (app) => {
	app.use(errorHandler);
};
