const db = require('../');

const Message = db.Model.extend({
  tablename: 'messages',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Message', Message);