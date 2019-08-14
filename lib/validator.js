'use strict';

const validator = module.exports = {};

validator.isLessThanTen = (input) => {
	return input < 10;
};

validator.isString = (input) => {
	return typeof input === 'string';
};

validator.isObjectValid = (data, schema) => {
	let isValid = true;
	Object.keys(schema.fields).forEach(expectedProperty => {
		console.log(data.hasOwnProperty(expectedProperty));
		if (data.hasOwnProperty(expectedProperty) === false) {
			isValid = false;
		}
	})
	return isValid;
};