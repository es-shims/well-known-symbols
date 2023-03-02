'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimSearch() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.search) {
		oDP(Symbol, 'search', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
