const helpers = require('./helpers')

exports.getApi = async (req, res) => {
    const restaurants = await helpers.getRestaurantsFromDataJson()
    res.send(`Everything works fine. There are ${restaurants.length} restaurants!`)
}