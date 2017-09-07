const db = require('../');

const Review = db.Model.extend({
  tablename: 'reviews',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Review', Review);