'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.unscopables || Symbol('Symbol.unscopables'))) || null;
