'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.hasInstance || Symbol('Symbol.hasInstance'))) || null;
