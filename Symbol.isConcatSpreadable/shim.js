'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimIsConcatSpreadable() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.isConcatSpreadable) {
		oDP(Symbol, 'isConcatSpreadable', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
