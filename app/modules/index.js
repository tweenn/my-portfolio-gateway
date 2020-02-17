module.exports = (app) => {
	require('./errors')(app);
	require('./body-parser')(app);
	require('./helmet')(app);
	require('./cors')(app);
	require('./secure')(app);
	require('./trust-proxy')(app);
	require('./router')(app);
	require('./rate-limit')(app);
};
