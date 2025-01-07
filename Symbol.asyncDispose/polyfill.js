'use strict';

var implementation = require('./implementation');

module.exports = function getPolyfill() {
	return (implementation && Symbol.asyncDispose) || implementation;
};
