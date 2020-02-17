
module.exports = (res, message, error = false) => {
	res.status(200).send({ error, data: message });
};
