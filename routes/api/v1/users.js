var express = require('express');
var router = express.Router();
var uuidv1 = require('uuid/v1');
var User = require('../../../models').User;
var bcrypt = require('bcrypt')
const saltRounds = 9;

/* POST new user. */
router.post('/', function(req, res, next) {
  let password = req.body.password
  let confirmation = req.body.passwordConfirmation
  if(password === confirmation) {
    /* Encrypts the new password before anything else */
    bcrypt.hash(password, saltRounds, function(error, hashed_password) {
      User.create({
        email: req.body.email,
        password: hashed_password,
        /* Generates a random api key using the uuidv1 package */
        api_key: uuidv1()
      }).then(user => {
        res.setHeader("Content-Type", "application/json");
        res.status(201).send(JSON.stringify({api_key: user.api_key}));
      }).catch(error => {
        res.setHeader("Content-Type", "application/json");
        res.status(500).send({ error });
      });
    });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({error: "Password does not match password confirmation"})
  }
});

module.exports = router;
