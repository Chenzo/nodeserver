//$ node server.js

var express = require('express');
var app = express();
var path = require('path');
var thePort = 7080;



// viewed at http://localhost:7080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

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

app.listen(thePort);





console.log("server running...");