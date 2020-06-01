const request = require('request')
const secretKey = require('./secretKey')

const geoCode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + `.json?access_token=${secretKey}`
    request({ url, json: true }, (error, { body }) => {

        if (error) {
            callback(`Unable to connect weather service!`, undefined)
        } else if (body.features.length === 0) {
            callback(`Unable to find this location!`, undefined)
        } else {
            callback(undefined, {
                location: body.features[0].place_name,
                lat: body.features[0].geometry.coordinates[1],
                lon: body.features[0].geometry.coordinates[0]
            })
        }
    })
}

module.exports = geoCode



