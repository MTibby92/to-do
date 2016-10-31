var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var path = require('path')
var exphbs = require('express-handlebars')
var mysql = require('mysql')
var pass = require('./secret-key')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Sets up Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


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


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
})