'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.toPrimitive || Symbol('Symbol.toPrimitive'))) || null;
