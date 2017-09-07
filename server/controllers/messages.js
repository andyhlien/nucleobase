const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Message.forge(req.body)
  .save()
  .then(message => {
    res.status(201).send(message);
  })
  .error(error => {
    res.status(500).send(err);
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
    res.status(503).send(err);
  })
  .catch(() => {
    res.sendStatus(404);
  });
};

module.exports.update = (req, res) => {
  models.Message.where(req.body)
  .fetch()
  .then(message => {
    if (!message) {
      throw message;
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
  models.Message.where(req.body)
  .fetchAll()
  .then(messages => {
    res.status(200).send(messages);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};