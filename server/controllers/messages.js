const email = require('../middleware/email');
const models = require('../../db/models');

module.exports.create = (req, res) => {
  if (req.body.receiverEmail) {
    email.send(req.body.senderDisplay, req.body.senderEmail, req.body.receiverDisplay, req.body.receiverEmail, 'Trainer Finder', req.body.message);
  }

  models.Message.forge({sender: req.body.sender, receiver: req.body.receiver, message: req.body.message})
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

// module.exports.get = (req, res) => {
//   models.Message.where(req.query)
//   .fetchAll()
//   .then(messages => {
//     var promises = messages.map(message => {
//       return new Promise((resolve, reject) => {
//         models.Profile.where({id: message.attributes.sender})
//         .fetch()
//         .then(profile => {
//           message.attributes.sender = profile;
//         })
//         .then(profile => {
//           models.Profile.where({id: message.attributes.receiver})
//           .fetch()
//           .then(profile => {
//             message.attributes.receiver = profile;

//             resolve();
//           })
//         });
//       });
//     });

//     Promise.all(promises).then((profiles) => {
//       res.status(200).send(messages);
//     });
//   })
//   .catch(error => {
//     res.status(503).send(error);
//   })
// };