'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return (implementation && Symbol.split) || implementation;
};
