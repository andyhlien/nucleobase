const ServicesJoin = require('../../server/controllers/services_join.js');
const Services = require('../../server/controllers/services.js');
const dbUtils = require('../../db/lib/utils.js');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('ServicesJoin model tests', () => {
  before(done => {
    dbUtils.rollbackMigrate(done);
  });

  after(done => {
    dbUtils.rollback(done);
  });

  it('should be able to create a service', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      req.body.id = 1;

      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes).to.deep.equal(req.body);

      done();
    };

    req.body = {
      service: 'Weight Lifting',
      description: 'Gains',
    };

    Services.create(req, res);
  });

  it('should be able to create services', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      req.body.id = 2;

      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes).to.deep.equal(req.body);

      done();
    };

    req.body = {
      service: 'Fencing',
      description: 'Very sharp',
    };

    Services.create(req, res);
  });

  it('should be able to create a service join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      req.body.id = 1;

      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes).to.deep.equal(req.body);

      done();
    };

    req.body = {
      user_id: 1,
      service_id: 1,
    };

    ServicesJoin.create(req, res);
  });

  it('should be able to update a service join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes.id).to.equal(req.body.id);
      expect(data.attributes.user_id).to.equal(req.body.user_id);
      expect(data.attributes.service_id).to.equal(req.body.service_id);

      done();
    };

    req.body = {
      id: 1,
      user_id: 1,
      service_id: 2,
    };

    ServicesJoin.update(req, res);
  });

  it('should be able to get services join', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.models).to.be.an('array');
      expect(data.models[0]).to.be.an('object');
      expect(data.models[0].id).to.equal(1);

      done();
    };

    req.body = {
      id: 1
    };

    ServicesJoin.get(req, res);
  });

  it('should be able to delete a service join', (done) => {
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

    ServicesJoin.delete(req, res);
  });
});