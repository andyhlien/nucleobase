const db = require('../');

const Rating = db.Model.extend({
  tableName: 'ratings',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Rating', Rating);