'use strict';

var GetIntrinsic = require('get-intrinsic');

var oDP = GetIntrinsic('%Object.defineProperty%', true);

var getPolyfill = require('./polyfill');

module.exports = function shimSpecies() {
	var polyfill = getPolyfill();

	if (polyfill && polyfill !== Symbol.species) {
		oDP(Symbol, 'species', {
			configurable: false,
			enumerable: false,
			value: polyfill,
			writable: false
		});
	}

	return polyfill;
};
