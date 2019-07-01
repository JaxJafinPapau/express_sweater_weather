module.exports = class ForecastSerializer {
  constructor(forecast) {
    this.forecast = forecast
  }

  formatCurrently(currently) {
    return {
      summary: currently.summary,
      icon: currently.icon,
      precipIntensity: currently.precipIntensity,
      precipProbability: currently.precipProbability,
      temperature: currently.temperature,
      humidity: currently.humidity,
      pressure: currently.pressure,
      windSpeed: currently.windSpeed,
      windGust: currently.windGust,
      windBearing: currently.windBearing,
      cloudCover: currently.cloudCover,
      visibility: currently.visibility
    }
  }

  formatHourly(hourly) {
    return {
      time: hourly.time,
      summary: hourly.summary,
      icon: hourly.icon,
      precipIntensity: hourly.precipIntensity,
      precipProbability: hourly.precipProbability,
      temperature: hourly.temperature,
      humidity: hourly.humidity,
      pressure: hourly.pressure,
      windSpeed: hourly.windSpeed,
      windGust: hourly.windGust,
      windBearing: hourly.windBearing,
      cloudCover: hourly.cloudCover,
      visibility: hourly.visibility
    }
  }

  formatDaily(daily) {
    return {
      time: daily.time,
      summary: daily.summary,
      icon: daily.icon,
      sunriseTime: daily.sunriseTime,
      sunsetTime: daily.sunsetTime,
      precipIntensity: daily.precipIntensity,
      precipIntensityMax: daily.precipIntensityMax,
      precipIntensityMaxTime: daily.precipIntensityMaxTime,
      precipProbability: daily.precipProbability,
      precipType: daily.precipProbability,
      temperatureHigh: daily.temperatureHigh,
      temperatureLow: daily.temperatureLow,
      humidity: daily.humidity,
      pressure: daily.pressure,
      windSpeed: daily.windSpeed,
      windGust: daily.windGust,
      cloudCover: daily.cloudCover,
      visibility: daily.visibility,
      temperatureMin: daily.temperatureMin,
      temperatureMax: daily.temperatureMax,
    }
  }

  serializeForecast() {
    let location = this.forecast.location
    let currently = this.formatCurrently(this.forecast.currently)
    let rawHourly = this.forecast.hourly.data.slice(0, 8)
    let hourly = {
      summary: this.forecast.hourly.summary,
      icon: this.forecast.hourly.icon,
      data: rawHourly.map(this.formatHourly)
      }
    let rawDaily = this.forecast.daily.data.slice(0, 7)
    let daily = {
      summary: this.forecast.daily.summary,
      icon: this.forecast.daily.icon,
      data: rawDaily.map(this.formatDaily)
    }
    return {
      location: location,
      currently: currently,
      hourly: hourly,
      daily: daily
    }
  }
}
