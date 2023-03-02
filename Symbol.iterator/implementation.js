'use strict';

var hasSymbols = require('has-symbols/shams')();

module.exports = (hasSymbols && Symbol.iterator) || null;
