'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');
const control = require('./controllers');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));
app.use(middleware.bodyParser.json());


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(__dirname + '/../public/dist'));
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/dashboard', routes.dashboard);
app.use('/api', routes.api);
app.use('/api/profiles', routes.profiles);

app.get('/verify', middleware.auth.logged, (req, res) => {
  res.status(200).send({message: true, user_id: req.user.id});
});

app.get('/session', middleware.auth.verify, (req, res) => {
  res.send(req.user);
} );

app.post('/appointments', middleware.auth.verify, control.Appointments.create);
app.delete('/appointments', middleware.auth.verify, control.Appointments.delete);
app.put('/appointments', middleware.auth.verify, control.Appointments.update);
app.get('/appointments', middleware.auth.verify, control.Appointments.get);

app.post('/bank_accounts', middleware.auth.verify, control.BankAccounts.create);
app.delete('/bank_accounts', middleware.auth.verify, control.BankAccounts.delete);
app.put('/bank_accounts', middleware.auth.verify, control.BankAccounts.update);
app.get('/bank_accounts', middleware.auth.verify, control.BankAccounts.get);

app.post('/messages', middleware.auth.verify, control.Messages.create);
app.delete('/messages', middleware.auth.verify, control.Messages.delete);
app.put('/messages', middleware.auth.verify, control.Messages.update);
app.get('/messages', middleware.auth.verify, control.Messages.get);

app.post('/payments', middleware.auth.verify, control.Payments.create);
app.delete('/payments', middleware.auth.verify, control.Payments.delete);
app.put('/payments', middleware.auth.verify, control.Payments.update);
app.get('/payments', middleware.auth.verify, control.Payments.get);

app.post('/ratings', middleware.auth.verify, control.Ratings.create);
app.delete('/ratings', middleware.auth.verify, control.Ratings.delete);
app.put('/ratings', middleware.auth.verify, control.Ratings.update);
app.get('/ratings', control.Ratings.get);

app.post('/reviews', middleware.auth.verify, control.Reviews.create);
app.delete('/reviews', middleware.auth.verify, control.Reviews.delete);
app.put('/reviews', middleware.auth.verify, control.Reviews.update);
app.get('/reviews', control.Reviews.get);

app.post('/services', middleware.auth.verify, control.Services.create);
app.delete('/services', middleware.auth.verify, control.Services.delete);
app.put('/services', middleware.auth.verify, control.Services.update);
app.get('/services', control.Services.get);

app.post('/services_join', middleware.auth.verify, control.ServicesJoin.create);
app.delete('/services_join', middleware.auth.verify, control.ServicesJoin.delete);
app.put('/services_join', middleware.auth.verify, control.ServicesJoin.update);
app.get('/services_join', control.ServicesJoin.get);

app.post('/user_trainer_join', middleware.auth.verify, control.UserTrainerJoin.create);
app.delete('/user_trainer_join', middleware.auth.verify, control.UserTrainerJoin.delete);
app.put('/user_trainer_join', middleware.auth.verify, control.UserTrainerJoin.update);
app.get('/user_trainer_join', middleware.auth.verify, control.UserTrainerJoin.get);

module.exports = app;