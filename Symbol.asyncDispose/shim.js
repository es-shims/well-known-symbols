'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimAsyncDispose() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.asyncDispose) {
		oDP(Symbol, 'asyncDispose', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
