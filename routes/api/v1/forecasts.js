var express = require('express');
var router = express.Router();
var User = require('../../../models').User;
const fetch = require('node-fetch')

var pry = require('pryjs')

// function renderLocation(data) {
//   return
// }

router.get('/', function(req, res, next) {

  var location = JSON.stringify(req.body.location.replace(' ', ''))
  var api_key = process.env.GOOGLE_API_KEY

  var latLong = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${api_key}`)
    .then(res => res.json())
    .then(json => { return json.results[0].geometry.location })
    .then(data => {
      console.log(data)
      const loc_data = data; })
    .catch(err  => { return { err } });

  eval(pry.it)
})
module.exports = router;
