const fetch = require('node-fetch')

var pry = require('pryjs')

module.exports = class DarkSkyService {
  constructor(latitude, longitude) {
    this.latitude = latitude
    this.longitude = longitude
    this.getWeather()
  }

  async getWeather() {
    let response = await fetch(`https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${this.latitude},${this.longitude}`)
    this.data = await response.json()
    eval(pry.it)
  }
}
