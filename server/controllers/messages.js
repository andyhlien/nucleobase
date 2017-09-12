const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Message.forge(req.body)
  .save()
  .then(message => {
    res.status(201).send(message);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.Message.where(req.body)
  .fetch()
  .then(message => {
    if (!message) {
      throw message;
    }

    return message.destroy()
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
  models.Message.where({ id: req.body.id })
  .fetch()
  .then(message => {
    if (!message) {
      throw message;
    }

    return message.save(req.body, { method: 'update' });
  })
  .then(message => {
    res.status(201).send(message);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.Message.where(req.query)
  .fetchAll()
  .then(messages => {
    res.status(200).send(messages);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};