const db = require('../');

const Payment = db.Model.extend({
  tablename: 'payments',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Payment', Payment);