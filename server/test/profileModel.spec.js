const expect = require('chai').expect;
const Profile = require('../../db/models/profiles.js');
const ServiceJoin = require('../../db/models/services_join.js');
const Service = require('../../db/models/services.js');
const Auth = require('../../db/models/auths.js');
const Payment = require('../../db/models/payments.js');
const BankAccount = require('../../db/models/bank_accounts.js');
const dbUtils = require('../../db/lib/utils.js');

describe('Profile model tests', function () {
  // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('Should be able to retrieve test data', function (done) {
    Profile.forge().fetchAll()
      .then(function (results) {
        // we are seeding more than one profile
        // expect(results.length).to.equal(1);
        expect(results.at(0).get('id')).to.equal(1);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should verify that all emails are unique', function (done) {
    // Insert a user with a username that's already in existence
    Profile.forge({ email: 'admin@domain.com' }).save()
      .then(function (result) {
        done(new Error('was not supposed to succeed'));
      })
      .catch(function (err) {
        expect(err).to.be.an('error');
        expect(err).to.match(/duplicate key value violates unique constraint/);
        done();
      });
  });

  it('Should be able to update an already existing record', function (done) {
    Profile.where({ id: 1 }).fetch()
      .then(function (result) {
        expect(result.get('id')).to.equal(1);
      })
      .then(function () {
        return Profile.where({ id: 1 }).save({ first: 'James', last: 'Davenport' }, { method: 'update' });
      })
      .then(function () {
        return Profile.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        expect(result.get('first')).to.equal('James');
        expect(result.get('last')).to.equal('Davenport');
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should be able to delete a record', function (done) {
    // Inserts a user
    ServiceJoin.where('id', '!=', '0').destroy()
      .then(Service.where('id', '!=', '0').destroy())
      .then(Auth.where('id', '!=', '0').destroy())
      .then(Payment.where('id', '!=', '0').destroy())
      .then(BankAccount.where('id', '!=', '0').destroy())
      .then(() => Profile.where({ id: 1 }).destroy())
      // verifies that the user has been inserted
      .then(function () {
        return Profile.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        expect(result).to.equal(null);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });
});