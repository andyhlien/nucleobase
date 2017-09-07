const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Review.forge(req.body)
  .save()
  .then(review => {
    res.status(201).send(review);
  })
  .error(error => {
    res.status(500).send(err);
  });
};

module.exports.delete = (req, res) => {
  models.Review.where(req.body)
  .fetch()
  .then(review => {
    if (!review) {
      throw review;
    }
    return review.destroy()
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
  models.Review.where(req.body)
  .fetch()
  .then(review => {
    if (!review) {
      throw review;
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
  models.Review.where(req.body)
  .fetchAll()
  .then(reviews => {
    res.status(200).send(reviews);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};