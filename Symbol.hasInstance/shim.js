'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimHasInstance() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.hasInstance) {
		oDP(Symbol, 'hasInstance', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
