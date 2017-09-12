const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.ServiceJoin.forge(req.body)
  .save()
  .then(serviceJoin => {
    res.status(201).send(serviceJoin);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.ServiceJoin.where(req.body)
  .fetch()
  .then(serviceJoin => {
    if (!serviceJoin) {
      throw serviceJoin;
    }

    return serviceJoin.destroy()
  })
  .then(() => {
    res.sendStatus(200);
  })
  .error(error => {
    res.status(503).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  });
};

module.exports.update = (req, res) => {
  models.ServiceJoin.where({ id: req.body.id })
  .fetch()
  .then(serviceJoin => {
    if (!serviceJoin) {
      throw serviceJoin;
    }

    return serviceJoin.save(req.body, { method: 'update' });
  })
  .then(serviceJoin => {
    res.status(201).send(serviceJoin);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.ServiceJoin.where(req.query)
  .fetchAll()
  .then(servicesJoin => {
    res.status(200).send(servicesJoin);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};