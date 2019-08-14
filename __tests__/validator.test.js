'use strict';

const Validator = require('../lib/validator.js');
const validator = new Validator;



describe('#isNumber', () => {
	test('Test normal input', () => {
		expect(validator.isNumber(1)).toEqual(true);
	})
});


describe('#isString', () => {
	test('Test if input is a string', () => {
		expect(validator.isString('alex', 'juliet', 'dog')).toEqual(true);
	})
});

describe('#isArray', () => {
	test('Test if input is an array', () => {
		expect(validator.isArray(['alex', 'juliet', 'dog'])).toEqual([]);
	})
})

describe('#isObject', () => {
	test('Test if input is an object', () => {
		let obj = alex;
		expect(validator.isObject({ obj })).toEqual(true);
	})
})


// describe('#isObjectValid', () => {
// 	test('regular cases', () => {
// 		const schema = {
// 			fields: {
// 				id: { type: 'string' },
// 				age: { type: 'number' },
// 				favoriteToys: { type: 'objects' }
// 			}
// 		};

		// const data1 = { id: 'conan', age: 12, favoriteToys: {} }
		// expect(validator.isObjectValid(
		// 	data1, schema
		// )).toEqual(true);

		// const data2 = { id: 462, favoriteToys: [] }

		// expect(validator.isObjectValid(
		// 	data2, schema
		// )).toEqual(false);

// 	})
// })
