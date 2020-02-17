
const cors = require('cors');

const corsOrigins = [
	'localhost',
	'mybluemix.net'
];

const configStatus = 200;

const config = {
	origin: (origin, callback) => {
		const status = {
			pass: {
				origin: true,
				optionsSuccessStatus: configStatus
			},
			blocked: {
				origin: false
			}
		};

		if (origin) {
			let willReturn = Array.from(corsOrigins);
			willReturn = willReturn.filter((corsOrigin) => {
				return origin.toString().indexOf(corsOrigin) >= 0;
			});

			if (willReturn.length > 0) {
				callback(null, status.pass);
			} else {
				callback(null, status.block);
			}
		} else {
			callback(null, status.pass);
		}
	},
	optionsSuccessStatus: configStatus
};

module.exports = (app) => {
	app.use(cors(config));
};
