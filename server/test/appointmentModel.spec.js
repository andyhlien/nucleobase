const Appointments = require('../../server/controllers/appointments.js');
const dbUtils = require('../../db/lib/utils.js');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('Appointment model tests', () => {
  before(function(done) {
    this.timeout(5000);
    dbUtils.rollbackMigrate(done);
  });

  after(function(done) {
    this.timeout(5000);
    dbUtils.rollback(done);
  });

  it('should be able to create an appointment', (done) => {
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
      sender: 1,
      receiver: 1,
      time: JSON.stringify(new Date()),
      date: 'October 10, 2017',
      price: 100,
      location: 'San Francisco',
    };

    Appointments.create(req, res);
  });

  it('should be able to update an appointment', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes.id).to.equal(req.body.id);
      expect(data.attributes.time).to.equal(req.body.time);
      expect(data.attributes.location).to.equal(req.body.location);

      done();
    };

    req.body = {
      id: 1,
      time: JSON.stringify(new Date()),
      location: 'Paris',
    };

    Appointments.update(req, res);
  });

  it('should be able to get appointments', (done) => {
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

    Appointments.get(req, res);
  });

  it('should be able to delete an appointment', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('string');
      expect(data).to.equal('OK');

      done();
    };

    req.query = {
      id: 1
    };

    Appointments.delete(req, res);
  });
});