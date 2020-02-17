
const get = () => {
	return process.env.VCAP_SERVICES;
};

const is = () => {
	return process.env.USER === 'vcap';
};

const getObject = () => {
	let vcapServices = get() || '{}';
	return JSON.parse(vcapServices);
};

const getService = (service = '') => {
	let vcapServices = getObject();
	return vcapServices[service.toString()];
};

module.exports = {
	is: is,
	get: get,
	getObject: getObject,
	getService: getService
};
