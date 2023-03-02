'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimToStringTag() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.toStringTag) {
		oDP(Symbol, 'toStringTag', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
