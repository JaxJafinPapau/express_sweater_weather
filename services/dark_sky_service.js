const fetch = require('node-fetch')

module.exports = class DarkSkyService {
  constructor(userLocation, latitude, longitude) {
    this.location = userLocation
    this.latitude = latitude
    this.longitude = longitude
  }

  async getWeather() {
    let response = await fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${this.latitude},${this.longitude}`)
    let data = await response.json()
    this.currently = await data.currently
    this.hourly = await data.hourly
    this.daily = await data.daily
    return this
  }
}
