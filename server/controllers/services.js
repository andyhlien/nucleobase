const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Service.forge(req.body)
  .save()
  .then(service => {
    res.status(201).send(service);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.Service.where(req.params)
  .fetch()
  .then(service => {
    if (!service) {
      throw service;
    }

    return service.destroy()
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
  models.Service.where(req.params)
  .fetch()
  .then(service => {
    if (!service) {
      throw service;
    }

    return service.save(req.body, { method: 'update' });
  })
  .then(service => {
    res.status(201).send(service);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.Service.where(req.params)
  .fetchAll()
  .then(services => {
    res.status(200).send(services);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};