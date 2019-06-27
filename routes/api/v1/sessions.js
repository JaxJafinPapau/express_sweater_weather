var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
var session = require('express-session');
var bcrypt = require('bcrypt')

/* POST new session (Login) */

router.post('/', function(req, res, next) {
  /* Retrieve user by email */
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    /* Compare passed password to hashed password in DB */
    bcrypt.compare(req.body.password, user.password).then( result => {
      if(result) {
        res.setHeader("Content-Type", "application/json");
        res.status(200).send(JSON.stringify({ api_key: user.api_key }));
      } else {
        res.setHeader("Content-Type", "application/json");
        /* Return 401 with incorrect password message if password is bad */
        res.status(401).send({error: "Incorrect password"});
      }
    });
  }).catch(error => {
    res.setHeader("Content-Type", "application/json");
    /* Return standard error log and 401 if user not found */
    res.status(401).send({ error });
  });
});

module.exports = router;
