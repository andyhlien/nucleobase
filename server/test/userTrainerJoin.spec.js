const UserTrainerJoin = require('../../server/controllers/user_trainer_join.js');
const dbUtils = require('../../db/lib/utils.js');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('UserTrainerJoin model tests', () => {
  before(done => {
    dbUtils.rollbackMigrate(done);
  });

  after(done => {
    dbUtils.rollback(done);
  });

  it('should be able to create a user trainer join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      req.body.id = data.attributes.id;

      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes).to.deep.equal(req.body);

      done();
    };

    req.body = {
      user_id: 1,
      trainer_id: 1,
      view: false
    };

    UserTrainerJoin.create(req, res);
  });

  it('should be able to update a user trainer join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes.id).to.equal(req.body.id);
      expect(data.attributes.view).to.equal(req.body.view);

      done();
    };

    req.body = {
      id: 1,
      view: true
    };

    UserTrainerJoin.update(req, res);
  });

  it('should be able to get user trainer join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.models).to.be.an('array');
      expect(data.models[0]).to.be.an('object');
      expect(data.models[0].id).to.equal(1);

      done();
    };

    req.query = {
      id: 1
    };

    UserTrainerJoin.get(req, res);
  });

  it('should be able to delete a user trainer join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('string');
      expect(data).to.equal('OK');

      done();
    };

    req.body = {
      id: 1
    };

    UserTrainerJoin.delete(req, res);
  });
});