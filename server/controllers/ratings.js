const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Rating.forge(req.body)
  .save()
  .then(rating => {
    res.status(201).send(rating);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.Rating.where(req.body)
  .fetch()
  .then(rating => {
    if (!rating) {
      throw rating;
    }

    return rating.destroy()
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
  models.Rating.where({ id: req.body.id })
  .fetch()
  .then(rating => {
    if (!rating) {
      throw rating;
    }

    return rating.save(req.body, { method: 'update' });
  })
  .then(rating => {
    res.status(201).send(rating);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.Rating.where(req.body)
  .fetchAll()
  .then(ratings => {
    res.status(200).send(ratings);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};