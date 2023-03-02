'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.match || Symbol('Symbol.match'))) || null;
