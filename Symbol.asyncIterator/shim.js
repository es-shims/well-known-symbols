'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimAsyncIterator() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.asyncIterator) {
		oDP(Symbol, 'asyncIterator', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
