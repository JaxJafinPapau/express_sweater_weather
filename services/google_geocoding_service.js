const fetch = require('node-fetch')

module.exports = class GoogleGeocodingService {
  constructor(location) {
    this.location = location
  }

  async getLatLong() {
    let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.location}&key=${process.env.GOOGLE_API_KEY}`)
    let data = await response.json()
    this.latitude = await data.results[0].geometry.location.lat
    this.longitude = await data.results[0].geometry.location.lng
    return this
  }
}
