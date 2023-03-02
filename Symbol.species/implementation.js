'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.species || Symbol('Symbol.species'))) || null;
