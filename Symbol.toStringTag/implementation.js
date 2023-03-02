'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.toStringTag || Symbol('Symbol.toStringTag'))) || null;
