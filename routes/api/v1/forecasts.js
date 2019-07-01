var express = require('express');
var router = express.Router();
var User = require('../../../models').User
var services = require('../../../services')
var serializers = require('../../../serializers')

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
  let weather = new services.DarkSkyService(rawLocation, location.latitude, location.longitude)
  let forecast = await weather.getWeather()
  let error = { error: "Invalid API key." }
  let serilized_forecast = new serializers.ForecastSerializer(forecast)


  if(user != null ) {
    res.status(200).send(serialized_forecast)
  } else {
    res.status(401).send(error)
  }
})

module.exports = router;
