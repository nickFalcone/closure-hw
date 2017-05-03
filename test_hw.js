import test from 'ava';

let fn = require('./hw');


test('counter', function (t) {
  let c = fn.counter(2);
  t.deepEqual(c.next(), 3);
});

