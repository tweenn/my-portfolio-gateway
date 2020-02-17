
// Modules
const express = require('express');
const router = new express.Router();

const midwareMergeRequestParams = require('../middlewares/merge-request-parameters');

router.use('/api', midwareMergeRequestParams, require('./api/'));

// Any other GET request returns to main
// router.use('/', require('./cdn/'));

// router.use('/', require('./front/'));

// Any other requests to any other API path returns an error message
router.all('*', (req, res) => {
	res.status(400).send({
		error: true,
		message: 'Invalid endpoint'
	});
});

module.exports = router;
