
const express = require('express');
const router = new express.Router();

router.use('/testimonials', require('./testimonials'));

module.exports = router;
