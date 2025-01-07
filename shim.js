'use strict';

var shimAsyncIterator = require('./Symbol.asyncIterator/shim');
var shimHasInstance = require('./Symbol.hasInstance/shim');
var shimIsConcatSpreadable = require('./Symbol.isConcatSpreadable/shim');
var shimIterator = require('./Symbol.iterator/shim');
var shimMatch = require('./Symbol.match/shim');
var shimMatchAll = require('./Symbol.matchAll/shim');
var shimReplace = require('./Symbol.replace/shim');
var shimSearch = require('./Symbol.search/shim');
var shimSpecies = require('./Symbol.species/shim');
var shimSplit = require('./Symbol.split/shim');
var shimToPrimitive = require('./Symbol.toPrimitive/shim');
var shimToStringTag = require('./Symbol.toStringTag/shim');
var shimUnscopables = require('./Symbol.unscopables/shim');
var shimDispose = require('./Symbol.dispose/shim');
var shimAsyncDispose = require('./Symbol.asyncDispose/shim');

module.exports = function shim() {
	shimAsyncIterator();
	shimHasInstance();
	shimIsConcatSpreadable();
	shimIterator();
	shimMatch();
	shimMatchAll();
	shimReplace();
	shimSearch();
	shimSpecies();
	shimSplit();
	shimToPrimitive();
	shimToStringTag();
	shimUnscopables();
	shimDispose();
	shimAsyncDispose();
};
