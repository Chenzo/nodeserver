var express = require('express');
var app = express();
var path = require('path');
var thePort = 7080;



// viewed at http://localhost:7080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/www/index.html'));
});

app.listen(thePort);