var orm = require('../config/orm')

var todo = {
	selectAll: function(callback) {
		orm.selectAll('todo', function(res) {
			callback(res)
		})
	},
	insertOne: function(name, boolean, callback) {
		orm.insertOne('todo', name, boolean, function(res) {
			callback(res)
		})
	},
	updateOne: function(id, column, boolean, callback) {
		orm.updateOne('todo', id, column, boolean, function(res) {
			callback(res)
		})
	}
}

module.exports = todo