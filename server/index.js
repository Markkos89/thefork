const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs')
const app = express()
const apiPort = 3000


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send(`Hello TheFork! I'm coming!!`)
})

app.get('/api', (req, res) => {
    let rawdata = fs.readFileSync('data.json');
    let data = JSON.parse(rawdata);
    console.log(data);
    res.send("Everything works fine. There are " + data.restaurants.length + " restaurants!")
})



app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))