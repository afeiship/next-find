# next-find
> Returns the matched element, else undefined.


## install:
```bash
npm install -S afeiship/next-find --registry=https://registry.npm.taobao.org
```

## usage:
```js
import 'next-find';

const users = [
  { 'user': 'barney',  'age': 36, 'active': true },
  { 'user': 'fred',    'age': 40, 'active': false },
  { 'user': 'pebbles', 'age': 1,  'active': true }
];

const result = nx.find(users, function(_,chr) {
  return chr.age < 40;
});

// return the first one:
// { 'user': 'barney',  'age': 36, 'active': true }


```
