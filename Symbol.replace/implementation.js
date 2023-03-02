'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && (Symbol.replace || Symbol('Symbol.replace'))) || null;
