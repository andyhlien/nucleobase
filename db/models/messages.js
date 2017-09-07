const db = require('../');

const Message = db.Model.extend({
  tableName: 'messages',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Message', Message);