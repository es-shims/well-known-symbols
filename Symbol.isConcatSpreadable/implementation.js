'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.isConcatSpreadable || Symbol('Symbol.isConcatSpreadable'))) || null;
