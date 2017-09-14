const models = require('../../db/models');

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
      // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

// module.exports.getAll = (req, res) => {
//   console.log('get here')
//   models.Profile.where(req.query)
//   .fetchAll()
//   .then(profiles => {
//     res.status(200).send(profiles);
//   })
//   .catch(error => {
//     res.status(503).send(error);
//   })
// };

module.exports.create = (req, res) => {
  models.Profile.forge({ email: req.body.email })
    .save()
    .then(result => {
      models.Auth.forge({
        type: 'local',
        password: req.body.password,
        profile_id: profile.get('id')
      }).save();
      res.status(201).send(result);
    })
    .catch(err => {
      if (err.constraint === 'users_username_unique') {
        return res.status(403);
      }
      res.status(500).send(err);
    });
};

module.exports.getOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      res.status(200).send(profile);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

// module.exports.update = (req, res) => {
//   console.log('i hate andy')
//   console.log(req.body.id)
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       console.log('still hate andy')
//       return profile.save(req.body, { method: 'update' });
//     })
//     .then(() => {
//       res.sendStatus(201);
//     })
//     .error(err => {
//       res.status(500).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };

module.exports.update = (req, res) => {
  if ( req.params.id ) {
    req.body.id = req.params.id;
  }

  models.Profile.where({ id: req.body.id })
  .fetch()
  .then(profile => {
    if (!profile) {
      throw profile;
    }
    return profile.save(req.body, { method: 'update' });
  })
  .then(profile => {
    res.status(201).send(profile);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.deleteOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      return profile.destroy();
    })
    .then(() => {
      res.sendStatus(200);
    })
    .error(err => {
      res.status(503).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};