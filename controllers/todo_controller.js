var express = require('express')
var path = require('path')
var todo = require('../models/todo')

var router = express.Router()

router.get('/', function(req,res) {
	res.render('index', {text: 'test'})
})

module.exports = router