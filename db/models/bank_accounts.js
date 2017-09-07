const db = require('../');

const BankAccount = db.Model.extend({
  tableName: 'bank_accounts',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('BankAccount', BankAccount);