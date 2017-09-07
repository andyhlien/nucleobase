const db = require('../');

const Rating = db.Model.extend({
  tablename: 'ratings',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Rating', Rating);