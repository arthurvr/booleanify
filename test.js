'use strict';
var test = require('ava');
var booleanify = require('./');

test('should convert falsy values to `false`', function (t) {
	[undefined, null, 0, '', NaN, false].forEach(function (val) {
		t.false(booleanify(val));
	});

	t.end();
});

test('should convert truthy values to `true`', function (t) {
	['foobar', 20, true].forEach(function (val) {
		t.true(booleanify(val));
	});

	t.end();
});

test('should recognize \'true\'', function (t) {
	t.true(booleanify('true'));
	t.end();
});

test('should recognize \'false\'', function (t) {
	t.false(booleanify('false'));
	t.end();
});
