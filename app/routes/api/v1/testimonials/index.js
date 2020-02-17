
const express = require('express');
const router = new express.Router();

const path = require('path');

const axios = require('axios');
const serverAnswer = require(path.resolve(global.APP_DIR, './handlers/server-answer')).json;

router.get('/', (req, res, next) => {
	axios.get('https://5e49b19b728fde0014e35279.mockapi.io/v1/testimonials')
		.then((answer) => {
			serverAnswer.success(res, answer.data);
		});
});

module.exports = router;
