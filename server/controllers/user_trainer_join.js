const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.UserTrainerJoin.forge(req.body)
  .save()
  .then(userTrainerJoin => {
    res.status(201).send(userTrainerJoin);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.UserTrainerJoin.where(req.params)
  .fetch()
  .then(userTrainerJoin => {
    if (!userTrainerJoin) {
      throw userTrainerJoin;
    }

    return userTrainerJoin.destroy()
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
  models.UserTrainerJoin.where(req.params)
  .fetch()
  .then(userTrainerJoin => {
    if (!userTrainerJoin) {
      throw userTrainerJoin;
    }

    return userTrainerJoin.save(req.body, { method: 'update' });
  })
  .then(userTrainerJoin => {
    res.status(201).send(userTrainerJoin);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.UserTrainerJoin.where(req.params)
  .fetchAll()
  .then(userTrainerJoin => {
    res.status(200).send(userTrainerJoin);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};