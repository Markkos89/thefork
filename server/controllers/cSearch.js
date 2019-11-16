const { distance } = require('mathjs')
const helpers = require('./helpers')
var _ = require('lodash');

exports.getApiSearch = async (req, res) => {
    const coor_x = parseInt(req.query.coor_x)
    const coor_y = parseInt(req.query.coor_y)
    const max_results = parseInt(req.query.max_results)
    const sort_by = req.query.sort_by

    const restaurants = await helpers.getRestaurantsFromDataJson()
    const aDistances = []
    // calculo la distancia entre los restaurantes y las coord pasadas por parametros
    for (let x = 0; x < restaurants.length; x++) {
        let dist = distance([restaurants[x].coor_x, restaurants[x].coor_y], [coor_x, coor_y])
        restaurants[x].distance = dist
        aDistances.push(restaurants[x])
    }

    // lo ordeno por la distancia con lodash
    let aDistancesSorted = _.sortBy(aDistances, ['distance'], (o) => { return o })
    let aRestaurants = []

    // devuelvo solo la cantidad pedida por parametros
    for (let x = 0; x < max_results; x++) {
        let resto = aDistancesSorted[x]
        aRestaurants.push(resto)
    }

    let aRestaurantsSortedBy = []
    // devuelvo el orden, si es que vino, por parametros
    switch (sort_by) {
        case 'name':
            aRestaurantsSortedBy = _.orderBy(aRestaurants, ['name'])
            break
        case 'rating':
            aRestaurantsSortedBy = _.orderBy(aRestaurants, ['rating'], ['desc'])
            break
        default:
            res.send({ count: aDistances.length, restaurants: aRestaurants })
            break
    }

    res.send({ count: aDistances.length, restaurants: aRestaurantsSortedBy })
}