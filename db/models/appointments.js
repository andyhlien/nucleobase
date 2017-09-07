const db = require('../');

const Appointment = db.Model.extend({
	tableName: 'appointments',
  profile: function() {
    return this.belongsTo('Profile');
  }
});

module.exports = db.model('Appointment', Appointment);