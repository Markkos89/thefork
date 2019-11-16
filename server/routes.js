const express = require('express')

const cIndex = require('./controllers/cIndex')
const cSearch = require('./controllers/cSearch')

const router = express.Router()

router.get('/', cIndex.getApi)
router.get('/search', cSearch.getApiSearch)

module.exports = router