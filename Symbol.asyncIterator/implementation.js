'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.asyncIterator || Symbol('Symbol.asyncIterator'))) || null;
