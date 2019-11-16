const distance = ('euclidean-distance')

exports.getApiSearch = (req, res) => {
    // ?coor_x=<number>&coor_y=<number>&max_results=<number>        
    const x = req.query.coor_x
    const y = req.query.coor_y
    const max_results = req.query.max_results
    res.send({ x, y, max_results })

    distance([0, 0], [1, 0])

}