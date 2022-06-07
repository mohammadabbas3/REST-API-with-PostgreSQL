const express = require('express')
const router = express.Router()
const { getAllUser ,getUserById} = require('../controllers/get.js')

router.get('/get-user', getAllUser)

router.get('/get-user-by-id/:id', getUserById)

module.exports = router