const searchLocation = require('./geoCode.js')
const geoTemp = require('./geoTemp.js')
/************** to give location in terminal ***********/
const adress = process.argv[2]
if (!adress) {
  console.log('Please provide an address')
} else {
  /**************to verify location and give more info about location*************/
  searchLocation(adress, (error, data) => {
    if (error) {
      return console.log(error)
    }
    /**************to give weather infomation about location ***********/
    geoTemp(data.lat, data.lon, (error, geoTempData) => {
      if (error) {
        return console.log(error)
      }
      console.log(data)
      console.log(geoTempData)
    })
  })

}

console.log(process.argv)

















