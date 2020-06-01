const request = require('request')
const tempSecretKey = require('./secretKey')

const geoTemp = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${tempSecretKey}&query=` + lat + ',' + lon

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback(`Unable to connect to weather service!`, undefined)
        } else if (body.error) {
            callback(`Unable to find location`, undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]} "It is currently ${body.current.temperature} degrees out. There is a ${body.current.precip} % chance of rain."`)
        }
    })
}

module.exports = geoTemp