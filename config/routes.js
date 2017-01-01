//
// Our route definitions
//

'use strict';

var auth = require('./middleware/authorization');

//
// controllers
//
var home = require('../app/controllers/home');
var user = require('../app/controllers/user');

module.exports = function(app, passport) {

  app.get('/', home.index);

  app.get('/login', user.getLogin);
  app.post('/login', user.postLogin);
  app.get('/logout', user.getLogout);
  app.get('/signup', user.getSignup);
  app.post('/signup', user.postSignup);

  app.get('/account', auth.isAuthenticated, user.getAccount);
  app.post('/account/profile', auth.isAuthenticated, user.postUpdateProfile);
  app.post('/account/password', auth.isAuthenticated, user.postUpdatePassword);
  app.post('/account/delete', auth.isAuthenticated, user.postDeleteAccount);

};
