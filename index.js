'use strict';

const validator = require('./lib/validator');

console.log(validator.isValid({ input: 13, rules: 'true' }));
console.log(validator.isValid({ input: -5, rules: 'false' }));
console.log(validator.isValid({ input: 1, rules: 'true' }));
