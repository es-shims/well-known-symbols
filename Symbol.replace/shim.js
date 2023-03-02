'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimReplace() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.replace) {
		oDP(Symbol, 'replace', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
