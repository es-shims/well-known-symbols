'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimMatchAll() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.matchAll) {
		oDP(Symbol, 'matchAll', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
