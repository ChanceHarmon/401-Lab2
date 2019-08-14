'use strict';

const validator = require('./lib/validator');

console.log(validator.isLessThanTen({ input: 9, rules: 'true' }));
console.log(validator.isLessThanTen({ input: -5, rules: 'true' }));

