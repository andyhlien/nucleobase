const models = require('../../db/models');

module.exports.create = (req, res) => {
  models.BankAccount.forge(req.body)
  .save()
  .then(bankAccount => {
    res.status(201).send(bankAccount);
  })
  .catch(error => {
    res.status(500).send(error);
  });
};

module.exports.delete = (req, res) => {
  models.BankAccount.where(req.params)
  .fetch()
  .then(bankAccount => {
    if (!bankAccount) {
      throw bankAccount;
    }

    return bankAccount.destroy()
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
  models.BankAccount.where(req.params)
  .fetch()
  .then(bankAccount => {
    if (!bankAccount) {
      throw bankAccount;
    }

    return bankAccount.save(req.body, { method: 'update' });
  })
  .then(bankAccount => {
    res.status(201).send(bankAccount);
  })
  .error(error => {
    res.status(500).send(error);
  })
  .catch(() => {
    res.sendStatus(404);
  })
};

module.exports.get = (req, res) => {
  models.BankAccount.where(req.params)
  .fetchAll()
  .then(bankAccounts => {
    res.status(200).send(bankAccounts);
  })
  .catch(error => {
    res.status(503).send(error);
  })
};