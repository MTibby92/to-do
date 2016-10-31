var conn = require('./connection')

var orm = {
	selectAll: function(table, callback) {
		conn.query('SELECT * FROM ??', [table], function(err, data) {
			if (err) throw err;
			callback(data)
		})
	},
	insertOne: function(table, name, boolean, callback) {
		conn.query('INSERT INTO ?? (todo_name, completed) VALUES (?, ?)', [table, name, boolean], function(err, data) {
			if (err) throw err;
			callback(data)
		})
	},
	updateOne: function(table, id, column, boolean, callback) {
		conn.query('UPDATE ?? SET ?? = ? WHERE id = ?', [table, column, boolean, id], function(err, data) {
			if (err) throw err;
			callback(data)
		})
	}
}

module.exports = orm