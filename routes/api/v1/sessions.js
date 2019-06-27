var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var session = require('express-session');
var bcrypt = require('bcrypt')

var pry = require('pryjs');

/* POST new session (Login) */

router.post('/', function(req, res, next) {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ api_key: user.api_key }))
  }).catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(401).send({ error });
  });
});

module.exports = router;
