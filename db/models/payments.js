const db = require('../');

const Payment = db.Model.extend({
  tableName: 'payments',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Payment', Payment);