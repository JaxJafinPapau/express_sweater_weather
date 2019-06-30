const fetch = require('node-fetch')

module.exports = class GoogleGeocodingService {
  constructor(location) {
    this.location = location
    this.getLatLong()
  }

  async getLatLong() {
    let response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.location}&key=${process.env.GOOGLE_API_KEY}`)
    this.data = await response.json()
    this.latitude = await this.data.results[0].geometry.location.lat
    this.longitude = await this.data.results[0].geometry.location.lng
  }
}
