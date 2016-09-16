//$ node server2.js
var express = require('express');
var app = express();
var path = require('path');
var thePort = 7080;
var chenzrouter = require('./chenzrouter');
var hbs = require('hbs');


app.set('view engine', 'hbs');

app.use('/', chenzrouter);
app.use('/imgs', express.static(__dirname + '/www/imgs'));
app.use('/js', express.static(__dirname + '/www/css'));
app.use('/css', express.static(__dirname + '/www/js'));

app.use(function(req, res, next) {
  res.sendFile(path.join(__dirname + '/www/404.html'));
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


app.listen(thePort, function() {
	console.log("server running...");
});





