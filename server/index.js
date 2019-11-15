const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const distance = require('euclidean-distance')
const cIndex = require('./controllers/cIndex')

const app = express()
const apiPort = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`Hello TheFork! I'm coming!!`)
})

app.get('/api', cIndex.getApi)

app.get('/api/search', (req, res) => {
    // ?coor_x=<number>&coor_y=<number>&max_results=<number>        
    const x = req.query.coor_x
    const y = req.query.coor_y
    const max_results = req.query.max_results
    res.send({ x, y, max_results })

    distance([0, 0], [1, 0])

})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))