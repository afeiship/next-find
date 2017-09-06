var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-find');

describe('next-find', function () {
  it('find element', function () {
    var users = [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ];

    var result = nx.find(users, function(_,chr) {
      return chr.age < 40;
    });

    assert.deepEqual( result, { 'user': 'barney',  'age': 36, 'active': true } )
  });

});
