
module.exports = (res, message, error = false) => {
	res.status(401).send({ error, data: message });
};
