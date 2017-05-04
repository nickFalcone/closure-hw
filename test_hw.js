import test from 'ava';

let hw = require('./hw');


test('counter', function (t) {
  let c = hw.counter(2);
  t.deepEqual(c.next(), 3);
});

test('multiply', function (t) {
  let by5 = hw.multiply(5);
  t.deepEqual(by5(2), 10);
  t.deepEqual(by5(11), 55);
  t.deepEqual(by5(6), 30);
  // val is the first number after multiply
  // and also 'by5'
  t.deepEqual(hw.multiply(3)(5), 15);
  t.deepEqual(hw.multiply(6)(5), 30);
  // num is the second number in parenthesis
});

test('discount', function (t) {
  let tot = hw.total(20);
  t.deepEqual(tot.discount(0.50), 10);
  t.deepEqual(tot.discount(0.20), 16);
  t.deepEqual(tot.discount(0.00), 20);
  t.deepEqual(tot.discount(1.00), 0);
});

test('user', function (t) {
  let user = hw.user();
  t.deepEqual(user.setName('Francis Bacon'), true);
  t.deepEqual(user.getName(), 'Francis Bacon');
  t.deepEqual(user.setName('123 hi'), false); 
  t.deepEqual(user.getName(), 'Francis Bacon');
});

test('color', function (t) {
  let color = hw.color(150, 200, 18);
  color.incrRed(12);
  color.incrGreen(30);
  color.incrBlue(-9);
  t.deepEqual(color.red(), 162);
  t.deepEqual(color.green(), 230);
  t.deepEqual(color.blue(), 9);
});

test('lives', function (t) {
  let lives = hw.lives(5);
  lives.died();
  t.deepEqual(lives.left(), 4);
  lives.died();
  t.deepEqual(lives.left(), 3);
  lives.restart();
  t.deepEqual(lives.left(), 5);
});

// test('message', function (t) {
//   let logger = hw.messages();
//   let msg = logger.record('first message');
//   t.deepEqual(msg, '[1] first message');
//   let msg = logger.record('second message');
//   t.deepEqual(msg, '[2] second message');
// });

test('pocket', function (t) {
  let pocket = hw.pocket(50);

  pocket.buy();
  t.deepEqual(pocket.coins(), 40);
  t.deepEqual(pocket.trinkets(), 1);

  pocket.buy();
  t.deepEqual(pocket.coins(), 30);
  t.deepEqual(pocket.trinkets(), 2);

  pocket.sell();
  t.deepEqual(pocket.coins(), 35);
  t.deepEqual(pocket.trinkets(), 1);

  // can't have negative coins or trinkets

  // pocket.sell();pocket.sell();pocket.sell();
  // pocket.sell();pocket.sell();pocket.sell();
  // pocket.sell();pocket.sell();pocket.sell();

  // t.deepEqual(pocket.coins(), 35);
  // t.deepEqual(pocket.trinkets(), 1);

  


});