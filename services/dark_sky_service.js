const fetch = require('node-fetch')

var pry = require('pryjs')

module.exports = class DarkSkyService {
  constructor(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
  }

  async getWeather() {
    let response = await fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${this.latitude},${this.longitude}`)
    let data = await response.json()
    this.hourly = await data.hourly.data.slice(0, 8)
    this.daily = await data.daily.data.slice(0, 7)
    return this
  }
}
