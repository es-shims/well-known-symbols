'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimToPrimitive() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.toPrimitive) {
		oDP(Symbol, 'toPrimitive', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
