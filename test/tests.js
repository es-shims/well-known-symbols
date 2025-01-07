'use strict';

var hasSymbols = require('has-symbols/shams')();
var isRegisteredSymbol = require('is-registered-symbol');
var isSymbol = require('is-symbol');

var isBrokenNodePolyfill = hasSymbols
	&& Symbol.dispose
	&& Symbol.keyFor(Symbol.dispose)
	&& Symbol.asyncDispose
	&& Symbol.keyFor(Symbol.asyncDispose);

module.exports = function runTests(t, fullName, symbol) {
	t.test('Symbol support: ' + fullName, { skip: !hasSymbols }, function (st) {
		st.ok(isSymbol(symbol), 'is a symbol');
		st.notOk(
			isRegisteredSymbol(symbol),
			'is not a registered symbol',
			{
				todo: isBrokenNodePolyfill
					&& (fullName === 'Symbol.dispose' || fullName === 'Symbol.asyncDispose')
					&& 'prior to v8 supporting it, node.js incorrectly polyfilled these WKS with a registered symbol'
			}
		);

		st.end();
	});

	t.test('no Symbol support: ' + fullName, { skip: hasSymbols }, function (st) {
		st.notOk(isSymbol(symbol), 'is not a symbol');
		st.notOk(isRegisteredSymbol(symbol), 'is not a registered symbol');

		st.equal(symbol, null, 'is `null`');

		st.end();
	});
};
