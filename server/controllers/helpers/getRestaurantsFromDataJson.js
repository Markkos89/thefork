const fs = require('fs')

exports.getRestaurantsFromDataJson = () => {
    let rawdata = fs.readFileSync('../../data.json')
    let data = JSON.parse(rawdata)
    console.log(data)
    return data.restaurants
}