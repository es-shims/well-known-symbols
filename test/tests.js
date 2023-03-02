'use strict';

var hasSymbols = require('has-symbols/shams');
var isRegisteredSymbol = require('is-registered-symbol');
var isSymbol = require('is-symbol');

module.exports = function runTests(t, fullName, symbol) {
	t.test('Symbol support: ' + fullName, { skip: !hasSymbols() }, function (st) {
		st.ok(isSymbol(symbol), 'is a symbol');
		st.notOk(isRegisteredSymbol(symbol), 'is not a registered symbol');

		st.end();
	});

	t.test('no Symbol support: ' + fullName, { skip: hasSymbols() }, function (st) {
		st.notOk(isSymbol(symbol), 'is not a symbol');
		st.notOk(isRegisteredSymbol(symbol), 'is not a registered symbol');

		st.equal(symbol, null, 'is `null`');

		st.end();
	});
};
