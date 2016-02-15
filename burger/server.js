var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var PORT = 8080 || process.env.NODE_ENV;

var app = express();
app.use(express.static('views/public/js'));
app.use(express.static('views/public/css'));
app.use(express.static('views/public/img'));

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

module.exports = app;
app.listen(PORT, function(err){
  console.log('Server is listening on port ' + PORT);
});