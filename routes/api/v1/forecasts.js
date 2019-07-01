var express = require('express');
var router = express.Router();
var User = require('../../../models').User
var services = require('../../../services')

var pry = require('pryjs')

router.get('/', async function(req, res, next) {
  let user = await User.findOne({
    where: {
      api_key: req.body.api_key
    }
  })
  let rawLocation = await req.url.replace('/?location=', '')
  let geocodeService = new services.GoogleGeocodingService(rawLocation)
  let location = await geocodeService.getLatLong()
  let weather = new services.DarkSkyService(location.latitude, location.longitude)
  let forecast = await weather.getWeather()

  if(user != null ) {
    res.status(200).send(forecast)
  } else {
    res.status(401).send("Invalid API key.")
  }

  // .then(user => {
  //   var latLong = new services.GoogleGeocodingService(rawLocation)
  //   return latLong
  // }).then(rawLocation => {
  //   return new services.DarkSkyService(rawLocation.latitude, rawLocation.longitude)
  // }).catch(error => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.status(401).send({ error })
  // })
})

module.exports = router;
