var express = require('express');
var router = express.Router();
var path = require('path');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/www/index.html'));
});

// define the second route
router.get('/second', function(req, res) {
  res.send('second route...');
});



router.param('name', function(req, res, next, name) {
    console.log('doing name validations on ' + name);
    req.name = name;
    next(); 
});

// define the third route w/o params
router.get('/third', function(req, res) {
  res.send('third route...');
});


// define the third route w/extra
router.get('/third/:name', function(req, res) {
  res.send('third: ' + req.name);
});


//Fourth w/ extra
router.get('/fourth/:extra', function(req, res) {
  //res.send('third route...');
  res.send('fourth: ' + req.params.extra);
});




// define the third route w/o params
router.get('/hbs', function(req, res) {
								//Finds the HBS files and renders them. Insanity.
  res.render(__dirname + '/www/hbs_test', { chenz_hbs: 'I am the variable', message: 'Hello there!'});

});





module.exports = router;


