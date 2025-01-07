'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimDispose() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.dispose) {
		oDP(Symbol, 'dispose', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
