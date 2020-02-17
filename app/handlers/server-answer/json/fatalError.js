
module.exports = (res, message, error = true) => {
	res.status(500).send({ error, data: message });
};
