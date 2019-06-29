var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
const fetch = require('node-fetch')

var pry = require('pryjs')

router.get('/', function(req, res, next) {
  var location = req.body.location
  eval(pry.it)
})
module.exports = router;
