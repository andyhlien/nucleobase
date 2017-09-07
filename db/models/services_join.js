const db = require('../');

const ServiceJoin = db.Model.extend({
  tablename: 'services_join',
  profiles: function() {
    return this.belongsTo('Profile'); 
  },
  services: function() {
    return this.belongsTo('Service');
  }
});

module.exports = db.model('ServiceJoin', ServiceJoin);