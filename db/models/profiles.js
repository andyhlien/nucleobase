const db = require('../');

const Profile = db.Model.extend({
  tableName: 'profiles',
  bankAccount: function() {
    return this.hasOne('BankAccount');
  },
  payment: function() {
    return this.hasOne('Payment');
  },
  appointments: function() {
    return this.hasMany('Appointment');
  },
  auths: function() {
    return this.hasMany('Auth');
  },
  messages: function() {
    return this.hasMany('Payment');
  },
  ratings: function() {
    return this.hasMany('Rating');
  }
});

module.exports = db.model('Profile', Profile);