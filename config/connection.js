var mysql = require('mysql')
var pass = require('./secret-key')

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : pass,
  database : 'todo_db'
})

conn.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack)
    return
  }

  console.log('connected as id ' + conn.threadId)

})

module.exports = conn