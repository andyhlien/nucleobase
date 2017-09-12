const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Review.forge(req.body)
  .save()
  .then(review => {
    res.status(201).send(review);
  })
  .catch(error => {
    res.status(500).send(error);
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
    res.status(503).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  });
};

module.exports.update = (req, res) => {
  models.Review.where({ id: req.body.id })
  .fetch()
  .then(review => {
    if (!review) {
      throw review;
    }

    return review.save(req.body, { method: 'update' });
  })
  .then(review => {
    res.status(201).send(review);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.Review.where(req.query)
  .fetchAll()
  .then(reviews => {
    res.status(200).send(reviews);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};