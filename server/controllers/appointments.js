const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Appointment.forge(req.body)
  .save()
  .then(appointment => {
    res.status(201).send(appointment);
  })
  .error(error => {
    res.status(500).send(err);
  });
};

module.exports.delete = (req, res) => {
  models.Appointment.where(req.body)
  .fetch()
  .then(appointment => {
    if (!appointment) {
      throw appointment;
    }
    return appointment.destroy()
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
  models.Appointment.where(req.body)
  .fetch()
  .then(appointment => {
    if (!appointment) {
      throw appointment;
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
  models.Appointment.where(req.body)
  .fetchAll()
  .then(appointments => {
    res.status(200).send(appointments);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};