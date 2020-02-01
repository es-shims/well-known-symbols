const test = require('ava')

const { isWellKnown, getLabel } = require('.')

const names = [
  'iterator',
  'asyncIterator',
  'match',
  'replace',
  'search',
  'split',
  'hasInstance',
  'isConcatSpreadable',
  'unscopables',
  'species',
  'toPrimitive',
  'toStringTag'
]

const wellKnown = (t, name, expected) => {
  t.is(isWellKnown(Symbol[name]), expected)
}
wellKnown.title = (_, name, expected) => `Symbol.${name} is ${expected ? 'well known' : 'not well known'} (on this platform)`

const label = (t, name, expected) => {
  t.is(getLabel(Symbol[name]), expected)
}
label.title = (_, name, expected) => {
  return `Label of Symbol.${name} is ${expected === undefined ? 'undefined' : `'${expected}'`} (on this platform)`
}

for (const name of names) {
  test(wellKnown, name, Symbol[name] !== undefined)
  test(label, name, Symbol[name] === undefined ? undefined : `Symbol.${name}`)
}
