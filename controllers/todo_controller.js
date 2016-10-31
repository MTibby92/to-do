var express = require('express')
var path = require('path')
var todo = require('../models/todo')

var router = express.Router()

router.get('/', function(req, res) {
	todo.selectAll(function(data) {
		var obj = {tasks: data}
		console.log(obj)
		res.render('index', obj)
	})
	
})

// router.post('/new', function(req, res) {

// })

module.exports = router