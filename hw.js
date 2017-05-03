module.exports = {
  /**
   * Return an object with a next() property. Each time the next function
   * is called the value returned is one higher than the time before.
   *
   *  var c = hw.counter(2);
   *  c.next(); // return 3
   */
  counter: function (start) {
    return {
      next: function () {
        return start + 1;
      }
    };
  },

  /**
   * Return a function that accepts the value to multiply `val` by.
   *
   *  let by5 = hw.multiply(5);
   *  by5(2);         // return 10
   *  by5(11);        // return 55
   *  by5(6);         // return 30
   * 
   *  hw.multiply(3)(5); // return 15
   *  hw.multiply(6)(5); // return 30
   */
  // need a val 2 in ()?
  multiply: function (val) { // val is set once at the beginning
    return function (num) { // num is normal scope
      return val * num;
    } 
  },

  /**
   * The discount property should
   * accept an amount that the original price should be discounted by. This
   * should not affect the original amount!
   *
   *  var tot = hw.total(20);
   *  tot.discount(0.50); // return 10
   *  tot.discount(0.20); // return 16
   */
  total: function (amount) {
    return {
      discount: function (off) {
        return amount - (amount * off);
      }
    }
  },

  /**
   * Set the name of a user. Only valid names can be provided. A `valid` name is
   * one that matches the regex ^[A-Za-z ]+$.
   *
   *  var user = hw.user();
   *  user.setName('Francis Bacon'); // return true
   *  user.getName(); // return 'Francis Bacon'
   *  user.setName('123 hi'); // return false
   *  user.getName(); // return 'Francis Bacon'
   */
  user: function () {
    let n = ''; // think of this as storage
    // everythhing beneth is accessable here
    // n is in the parent scope of setName and getName
    return {
      setName: function (name) {
        if (name.match(/^[A-Za-z ]+$/)) {
          n = name;
          // this lets us send the value of name outside setName
          return true;
        } else {
          return false;
        }
      },
      getName: function () {
        return n;
      }
    }
  },

  /**
   * Create a color object that's got six different properties: incrRed(amount), 
   * incrGreen(amount), and incrBlue(amount) - all of which change the R, G, or B
   * value by the specified quantity (could be negative).
   *
   * There should also be a red(), green(), and blue() function that return the current
   * value for that color channel.
   *
   * You can't have a color value less than zero or greater than 255.
   *
   *  var color = hw.color(150, 200, 18);
   *  color.incrRed(12);
   *  color.incrGreen(30);
   *  color.incrBlue(-9);
   *  console.log(color.red(), color.green(), color.blue()); // 162, 230, 9
   */
  color: function (r, g, b) { },

  /**
   * Track the number of lives remaining in a game.
   *
   *  var lives = hw.lives(5);
   *  lives.died();
   *  console.log(lives.left()); // 4
   *  lives.died();
   *  console.log(lives.left()); // 3
   *  lives.restart();
   *  console.log(lives.left()); // 5
   */
  lives: function (start) { },

  /**
   * Return a string that contains the 'message id' before the message text.
   * The message ID starts at one and increments with each record.
   *
   *  var logger = hw.messages();
   *  var msg = logger.record('first message');
   *  console.log(msg); // '[1] first message'
   *  msg = logger.record('second message');
   *  console.log(msg); // '[2] second message'
   */
  messages: function () { },

  /**
   * Create a pocket object that can contain COINS and TRINKETS. The pocket
   * allows users to buy() trinkets for 10 coins, or sell() trinkets for 5
   * coins. You can also return the number of coins() or trinkets().
   *
   * You can't have a negative number of coins or trinkets.
   *
   *  var pocket = hw.pocket(50);
   *  pocket.buy(); // buy for 10 coins
   *  console.log(pocket.coins()); // 40
   *  console.log(pocket.trinkets()); // 1
   *
   *  pocket.buy();
   *  console.log(pocket.coins()); // 30
   *  console.log(pocket.trinkets()); // 2
   *
   *  pocket.sell();
   *  console.log(pocket.coins()); // 35
   *  console.log(pocket.trinkets()); // 1
   */
  pocket: function (start) { },

  /**
 * Create an account that keeps track of a balance and records all
 * transactions to and from the account. You shouldn't be able to 
 * change the balance without recording a transaction. Each transaction
 * should be represented as an object like:
 * 
 *      { type: 'withdraw', amount: 15, success: true }
 * 
 * You also shouldn't be able to withdraw money that you don't have. If
 * you try to do that, the transaction should still be recorded but
 * 'success' should be set to false.
 * 
 * let acct = hw.account(200);
 * acct.withdraw(100);  // successful withdraw
 * acct.withdraw(20);   // successful withdraw
 * 
 * acct.deposit(25);    // successful deposit
 * acct.withdraw(200);  // unsuccessful withdraw (not enough funds)
 * 
 * acct.transactions(); // returns array of all transaction objects
 */
  account: function (initial) { },
};