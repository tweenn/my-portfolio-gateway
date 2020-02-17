
const express = require('express');

module.exports = () => {
	// Server
	const app = express();
	const server = require('./modules/protocol')(app);
	const port = process.env.PORT || 3333;

	// Porting
	app.set('port', port);

	// Add all the handlers to the app
	require('./modules')(app);

	return {
		server,
		port
	};
};
