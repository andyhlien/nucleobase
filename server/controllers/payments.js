const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Payment.forge(req.body)
  .save()
  .then(payment => {
    res.status(201).send(payment);
  })
  .error(error => {
    res.status(500).send(err);
  });
};

module.exports.delete = (req, res) => {
  models.Payment.where(req.body)
  .fetch()
  .then(payment => {
    if (!payment) {
      throw payment;
    }
    return payment.destroy()
  })
  .then(() => {
    res.sendStatus(200);
  })
  .error(error => {
    res.status(503).send(err);
  })
  .catch(() => {
    res.sendStatus(404);
  });
};

module.exports.update = (req, res) => {
  models.Payment.where(req.body)
  .fetch()
  .then(payment => {
    if (!payment) {
      throw payment;
    }
    return profile.save(req.body, { method: 'update' });
  })
  .then(() => {
    res.sendStatus(201);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.Payment.where(req.body)
  .fetchAll()
  .then(payments => {
    res.status(200).send(payments);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};