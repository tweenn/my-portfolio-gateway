
let isEmpty = (object) => {
	if (JSON.stringify(object) === '{}') {
		return true;
	}
	return false;
};

module.exports = (req, res, next) => {
	res.locals.search = {};

	if (isEmpty(req.query) && (!isEmpty(req.body))) {
		res.locals.search = req.body;
	} else if (!isEmpty(req.query) && (isEmpty(req.body))) {
		res.locals.search = req.query;
	} else if (!isEmpty(req.query) && (!isEmpty(req.body))) {
		res.locals.search = Object.assign(req.query, req.body);
	}

	res.locals.search = Object.assign(res.locals.search, req.params);

	// console.log(req.body, req.query, req.params);

	next();
};
