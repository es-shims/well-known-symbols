'use strict';

require('../auto');

var test = require('tape');
var forEach = require('for-each');
var hasSymbols = require('has-symbols/shams')();
var isWellKnownSymbol = require('is-well-known-symbol');

var shims = require('../');

var runTests = require('./tests');

test('shimmed', { skip: !hasSymbols }, function (t) {
	forEach(shims, function (shim) {
		var name = shim.replace(/^Symbol\./, '');
		var symbol = Symbol[name];

		t.test(shim, function (st) {
			st.deepEqual(
				Object.getOwnPropertyDescriptor(Symbol, name),
				{
					configurable: false,
					enumerable: false,
					value: symbol,
					writable: false
				}
			);

			st.ok(isWellKnownSymbol(symbol), 'is a well-known symbol');

			runTests(st, shim, symbol);

			st.end();
		});
	});

	t.end();
});
