const express = require('express')
const router = express.Router()

router.use('/post', require('./post'))

router.use('/get', require('./get'))

module.exports = router