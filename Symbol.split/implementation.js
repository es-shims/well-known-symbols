'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.split || Symbol('Symbol.split'))) || null;
