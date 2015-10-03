import test from 'ava';
import booleanify from './';

test('should convert falsy values to `false`', t => {
	[undefined, null, 0, '', NaN, false].forEach(val => {
		t.false(booleanify(val));
	});

	t.end();
});

test('should convert truthy values to `true`', t => {
	['foobar', 20, true].forEach(val => {
		t.true(booleanify(val));
	});

	t.end();
});

test('should recognize \'true\'', t => {
	t.true(booleanify('true'));
	t.end();
});

test('should recognize \'false\'', t => {
	t.false(booleanify('false'));
	t.end();
});
