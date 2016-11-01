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

router.post('/new', function(req, res) {
	todo.insertOne(req.body.name, req.body.boolean, function() {
		res.redirect('/')
	})
})

router.put('/update/:id', function(req, res) {
	todo.updateOne(req.params.id, 'completed', true, function() {
		res.redirect('/')
	})
})

module.exports = router