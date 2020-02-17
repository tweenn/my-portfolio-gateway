
const rateLimit = require('express-rate-limit');

module.exports = rateLimit({
	windowMs: 30 * 1000, // 30 seconds
	delayMs: 0,
	max: 3,
	message: JSON.stringify({
		error: 'Too many requests, please try again in 30 seconds.',
		code: 429
	})
});
