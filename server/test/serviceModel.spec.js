const Services = require('../../server/controllers/services.js');
const dbUtils = require('../../db/lib/utils.js');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('Service model tests', () => {
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
      service: 'Yoga',
      description: 'Tom',
    };

    Services.create(req, res);
  });

  it('should be able to update a service', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes.id).to.equal(req.params.id);
      expect(data.attributes.service).to.equal(req.body.service);
      expect(data.attributes.description).to.equal(req.body.description);

      done();
    };

    req.params = {
      id: 1
    };

    req.body = {
      service: 'Fencing',
      description: 'Chao',
    };

    Services.update(req, res);
  });

  it('should be able to get services', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.models).to.be.an('array');
      expect(data.models[0]).to.be.an('object');
      expect(data.models[0].id).to.equal(1);

      done();
    };

    req.params = {
      id: 1
    };

    Services.get(req, res);
  });

  it('should be able to delete a service', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('string');
      expect(data).to.equal('OK');

      done();
    };

    req.params = {
      id: 1
    };

    Services.delete(req, res);
  });
});