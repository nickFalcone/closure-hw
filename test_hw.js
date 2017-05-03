import test from 'ava';

let hw = require('./hw');


test('counter', function (t) {
  let c = hw.counter(2);
  t.deepEqual(c.next(), 3);
});

// test('multiply', function (t) {
//   t.deepEqual(hw.multiply(3)(5), 15);
// });

test('discount', function (t) {
  let tot = hw.total(20);
  t.deepEqual(tot.discount(0.50), 10);
  t.deepEqual(tot.discount(0.20), 16);
  t.deepEqual(tot.discount(0.00), 20);
  t.deepEqual(tot.discount(1.00), 0);
});