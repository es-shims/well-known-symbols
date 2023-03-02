'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.matchAll || Symbol('Symbol.matchAll'))) || null;
