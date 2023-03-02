'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimSymbolIterator() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.iterator) {
		oDP(Symbol, 'iterator', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
