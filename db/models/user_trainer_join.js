const db = require('../');

const UserTrainerJoin = db.Model.extend({
  tableName: 'user_trainer_join',
  profiles: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('UserTrainerJoin', UserTrainerJoin);