var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'))


// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// Sets up Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


// var routes = require('./controllers/todo_controller.js')
// app.use('/', routes)


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
})