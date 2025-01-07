'use strict';

var test = require('tape');
var forEach = require('for-each');

var shims = require('../');

var runTests = require('./tests');

test('shims', function (t) {
	t.deepEqual(
		shims.sort(),
		[
			'Symbol.asyncIterator',
			'Symbol.hasInstance',
			'Symbol.isConcatSpreadable',
			'Symbol.iterator',
			'Symbol.match',
			'Symbol.matchAll',
			'Symbol.replace',
			'Symbol.search',
			'Symbol.species',
			'Symbol.split',
			'Symbol.toPrimitive',
			'Symbol.toStringTag',
			'Symbol.unscopables',
			'Symbol.dispose',
			'Symbol.asyncDispose'
		].sort(),
		'has expected shims'
	);

	t.end();
});

test('implementation', function (t) {
	forEach(shims, function (shim) {
		var implementation = require('../' + shim + '/implementation'); // eslint-disable-line global-require

		runTests(t, shim, implementation);
	});

	t.end();
});
