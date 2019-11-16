const fs = require('fs')
const path = require('path')

exports.getRestaurantsFromDataJson = () => new Promise((resolve, reject) => {
    try {
        let rawdata = fs.readFileSync(path.resolve(__dirname, 'data.json'), 'utf8')
        let data = JSON.parse(rawdata)
        // console.log(data)
        resolve(data.restaurants)
    } catch (e) {
        reject(e);
    }

});