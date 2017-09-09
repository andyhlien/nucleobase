const Payments = require('../../server/controllers/payments.js');
const dbUtils = require('../../db/lib/utils.js');
const httpMocks = require('node-mocks-http');
const expect = require('chai').expect;

describe('Payment model tests', () => {
  before(done => {
    dbUtils.rollbackMigrate(done);
  });

  after(done => {
    dbUtils.rollback(done);
  });

  it('should be able to create a payment', (done) => {
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
      card_number: 1,
      card_type: 'Master Card',
      crv: 1,
      expiration_date: 'October 10, 2017',
      name_card_holder: 'Gui',
    };

    Payments.create(req, res);
  });

  it('should be able to update a payment', (done) => {
    var req = httpMocks.createRequest();
    var res = httpMocks.createResponse();

    res.send = (data) => {
      expect(data).to.be.an('object');
      expect(data.attributes).to.be.an('object');
      expect(data.attributes.id).to.equal(req.body.id);
      expect(data.attributes.card_number).to.equal(req.body.card_number);
      expect(data.attributes.crv).to.equal(req.body.crv);

      done();
    };

    req.body = {
      id: 1,
      card_number: 2,
      crv: 2
    };

    Payments.update(req, res);
  });

  it('should be able to get payments', (done) => {
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

    Payments.get(req, res);
  });

  it('should be able to delete a payment', (done) => {
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

    Payments.delete(req, res);
  });
});