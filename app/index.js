
require('./handlers/global-folder');

// // HTTPD Server
const { server, port } = require('./server.js')();

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
