'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimMatch() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.match) {
		oDP(Symbol, 'match', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
