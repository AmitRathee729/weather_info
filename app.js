const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=8d370ee3e91a4fa993c74eaff3cb90ea&query=New%20York'

request({url: url }, (error, response) => {
    const data = JSON.parse(response.body) 
    console.log(data.current)
})






















