

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;




var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/hmtlController');

app.set('view engine','ejs');

app.use('/assets', express.static(__dirname + "/public"));

app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});



apiController(app);
htmlController(app);

app.listen(port);
