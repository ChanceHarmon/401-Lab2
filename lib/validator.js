'use strict';

const validator = module.exports = {};

class Validator {

	constructor(schema) {
		this.schema = schema;
	}

	isString(input) {
		return typeof input === 'string';
	}

	isObject(input) { }

	isArray(input, valueType) { }

	isBoolean(input) { }

	isNumber(input) { }

	isFunction(input) { }

	isTruthy(input) { }

	// Vinicio - checks an object against a schema
	// isValid(data, schema)
	// isValidObject in my demo code
	isValid(data) {
	}
}

// validator.isLessThanTen = (input) => {
// 	return input < 10;
// };

// validator.isString = (input) => {
// 	return typeof input === 'string';
// };

// validator.isObjectValid = (data, schema) => {
// 	let isValid = true;
// 	Object.keys(schema.fields).forEach(expectedProperty => {
// 		console.log(data.hasOwnProperty(expectedProperty));
// 		if (data.hasOwnProperty(expectedProperty) === false) {
// 			isValid = false;
// 		}
// 	})
// 	return isValid;
// };