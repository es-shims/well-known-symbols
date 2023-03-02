# well-known-symbols <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ESnext spec-compliant shim/polyfill/replacement for all Well-Known Symbols that works in any environment with Symbols.

New Well-Known Symbols will be added after they reach stage 3.

This package implements the [es-shim API](https://github.com/es-shims/api) “multi” interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262/#sec-well-known-symbols).

Note: functionality provided by this package prior to v4 can be found in:
 - https://www.npmjs.com/package/is-registered-symbol
 - https://www.npmjs.com/package/is-well-known-symbol

## Getting started

```sh
npm install --save well-known-symbols
```

## Usage/Examples

```js
const assert = require('assert');

require('well-known-symbols/auto');

assert.equal(typeof Symbol.asyncIterator, 'symbol');
assert.equal(typeof Symbol.hasInstance, 'symbol');
assert.equal(typeof Symbol.isConcatSpreadable, 'symbol');
assert.equal(typeof Symbol.iterator, 'symbol');
assert.equal(typeof Symbol.match, 'symbol');
assert.equal(typeof Symbol.matchAll, 'symbol');
assert.equal(typeof Symbol.replace, 'symbol');
assert.equal(typeof Symbol.search, 'symbol');
assert.equal(typeof Symbol.species, 'symbol');
assert.equal(typeof Symbol.split, 'symbol');
assert.equal(typeof Symbol.toPrimitive, 'symbol');
assert.equal(typeof Symbol.toStringTag, 'symbol');
assert.equal(typeof Symbol.unscopables, 'symbol');
```

## Tests

Clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/well-known-symbols
[npm-version-svg]: https://versionbadg.es/es-shims/well-known-symbols.svg
[deps-svg]: https://david-dm.org/es-shims/well-known-symbols.svg
[deps-url]: https://david-dm.org/es-shims/well-known-symbols
[dev-deps-svg]: https://david-dm.org/es-shims/well-known-symbols/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/well-known-symbols#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/well-known-symbols.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/well-known-symbols.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/well-known-symbols.svg
[downloads-url]: https://npm-stat.com/charts.html?package=well-known-symbols
[codecov-image]: https://codecov.io/gh/es-shims/well-known-symbols/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/well-known-symbols/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/well-known-symbols
[actions-url]: https://github.com/es-shims/well-known-symbols/actions
