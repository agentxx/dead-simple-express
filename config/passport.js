'use strict';

var mongoose = require('./mongoose');
var User = mongoose.model('User');

var local = require('./passport/local');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  // use these strategies
  passport.use(local);
};
