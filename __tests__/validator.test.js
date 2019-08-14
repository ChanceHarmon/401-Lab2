'use strict';

const validator = require('../lib/validator.js');


describe('#validator', () => {
	describe('#isLessThanTen', () => {
		test('Test normal input', () => {
			expect(validator.isLessThanTen(1)).toEqual(true);
		})
	});
});

describe('#isString', () => {
	test('Test if input is a function', () => {
		expect(validator.isString('alex', 'juliet', 'dog')).toEqual(true);
	})
})


describe('#isObjectValid', () => {
	test('regular cases', () => {
		const schema = {
			fields: {
				id: { type: 'string' },
				age: { type: 'number' },
				favoriteToys: { type: 'objects' }
			},
		};

		const data1 = { id: 'conan', age: 12, favoriteToys: {} }
		expect(validator.isObjectValid(
			data1, schema
		)).toEqual(true);

		const data2 = { id: 462, favoriteToys: [] }

		expect(validator.isObjectValid(
			data2, schema
		)).toEqual(false);

	})
})
