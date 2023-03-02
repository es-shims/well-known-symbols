'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimUnscopables() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.unscopables) {
		oDP(Symbol, 'unscopables', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
