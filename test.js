'use strict';
var assert = require('assert');
var booleanify = require('./');

it('should convert falsy values to `false`', function () {
	[undefined, null, 0, '', NaN, false].forEach(function (val) {
		assert.strictEqual(booleanify(val), false);
	});
});

it('should convert truthy values to `true`', function () {
	['foobar', 20, true].forEach(function (val) {
		assert.strictEqual(booleanify(val), true);
	});
});

it('should recognize \'true\'', function () {
	assert.strictEqual(booleanify('true'), true);
});

it('should recognize \'false\'', function () {
	assert.strictEqual(booleanify('false'), false);
});
