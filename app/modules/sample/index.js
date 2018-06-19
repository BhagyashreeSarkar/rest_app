var express = require('express')
var router = express.Router()
var sampleController = require('./sampleController')

router.get('/findAll', sampleController.findAll);
router.post('/create', sampleController.create);
module.exports = router
