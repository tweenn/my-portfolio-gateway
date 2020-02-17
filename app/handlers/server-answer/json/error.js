
module.exports = (res, message, error = true) => {
	res.status(400).send({ error, data: message });
};
