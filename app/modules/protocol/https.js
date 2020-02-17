
const fs = require('fs');
const https = require('https');

const path = require('path');

const config = {
	key: path.resolve(global.ROOT_DIR, './certs/localhost/key.pem'),
	cert: path.resolve(global.ROOT_DIR, './certs/localhost/cert.pem'),
	passphrase: 'bobjs',
	requestCert: false,
	rejectUnauthorized: false
};

module.exports = (app) => {

	let httpsOptions = config;
	httpsOptions.key = fs.readFileSync(config.key);
	httpsOptions.cert = fs.readFileSync(config.cert);

	return https.createServer(httpsOptions, app);
};
