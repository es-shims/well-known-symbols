'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimSplit() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.split) {
		oDP(Symbol, 'split', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
