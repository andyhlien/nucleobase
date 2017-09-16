const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.Appointment.forge(req.body)
  .save()
  .then(appointment => {
    res.status(201).send(appointment);
  })
  .catch(error => {
    res.status(500).send(error);
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
    res.status(503).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  });
};

module.exports.update = (req, res) => {
  models.Appointment.where({ id: req.body.id })
  .fetch()
  .then(appointment => {
    if (!appointment) {
      throw appointment;
    }

    return appointment.save(req.body, { method: 'update' });
  })
  .then(appointment => {
    res.status(201).send(appointment);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })  
};

module.exports.get = (req, res) => {
  models.Appointment.where(req.query)
  .fetchAll()
  .then(appointments => {
    var promises = appointments.map(appointment => {
      return new Promise((resolve, reject) => {
        models.Profile.where({id: appointment.attributes.sender})
        .fetch()
        .then(profile => {
          appointment.attributes.sender = profile;
        })
        .then(profile => {
          models.Profile.where({id: appointment.attributes.receiver})
          .fetch()
          .then(profile => {
            appointment.attributes.receiver = profile;
            appointment.attributes.time = JSON.parse(appointment.attributes.time);
            appointment.attributes.time.to = (new Date(Date.parse(appointment.attributes.time.to))).toString();
            appointment.attributes.time.from = (new Date(Date.parse(appointment.attributes.time.from))).toString();

            resolve();
          })
        });
      });
    });

    Promise.all(promises).then((profiles) => {
      res.status(200).send(appointments);
    });
  })
  .catch(error => {
    res.status(503).send(error);
  })
};