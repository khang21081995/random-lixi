/**
 * Record.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
const LIST_MONEY = {
  10000: 100,
  20000: 50,
  50000: 10,
  100000: 5,
  200000: 2,
  500000: 0.5
}
module.exports = {

  attributes: {
    name: {
      type: 'string'
    },
    money: {
      type: 'number',
    }
  },
  beforeCreate: function (valuesToSet, proceed) {
    var rand = Math.random() * 100;
    for (const key in LIST_MONEY) {
      if (rand <= LIST_MONEY[key]) {
        valuesToSet.money = +key;
      }
    }
    return proceed();
  }

};
