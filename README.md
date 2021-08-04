# next-find
> Find value by path.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-find
```

## usage
```js
import '@jswork/next-find';

const users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = nx.find(users, function(chr) {
  return chr.age < 40;
},'user');

// 'barney'
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-find/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-find
[version-url]: https://npmjs.org/package/@jswork/next-find

[license-image]: https://img.shields.io/npm/l/@jswork/next-find
[license-url]: https://github.com/afeiship/next-find/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-find
[size-url]: https://github.com/afeiship/next-find/blob/master/dist/next-find.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-find
[download-url]: https://www.npmjs.com/package/@jswork/next-find
