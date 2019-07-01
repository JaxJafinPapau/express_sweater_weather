var express = require('express');
var router = express.Router();
var User = require('../../../models').User
var Favorite = require('../../../models').Favorite

var pry = require('pryjs')

router.post('/', async function(req, res, next) {
  let user = await User.findOne({
    where: {
      api_key: req.body.api_key
    }
  })
  let rawLocation = req.body.location
  let location = rawLocation.replace(' ', '').toLowerCase()
  if(user != null) {
    let favorite = await Favorite.create({
      location: location,
      userId: user.id
    })
    res.status(200).send({ message: `${rawLocation} has been added to your favorites`})
  } else {
    res.status(401).send({ message: `Incorrect API key`})
  }
})

module.exports = router;
