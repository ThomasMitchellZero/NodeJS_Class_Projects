/* at the start, this program is working. */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.set('view engine','ejs');

app.use('/assets', express.static(__dirname + "/public"));

app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});

app.get('/', function(req, res){
    res.render('index');
});

app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, Qstr:req.query.qstr });
});

app.post('/person', urlencodedParser, function(req, res){
    res.send("thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

/* AFAICT, the function I run as the second parameter doesn't really 
depend on the HTTP verb of the request.  I think I could write a
function that deletes a user in response to a GET request.  But
in addition to being non-optimal in ways I don't understand, it is
also harder to read.  It is not RESTful. */

app.get('/api/person/:id', function(req, res){
    // get that data from the database.
    res.json({firstname: "John", lastname: "Doe"});
});

app.post('/api/person', jsonParser, function(req,res){
    // save to the database.  Class code, not mine.
});

app.delete('/api/person/:id', function(req, res){
    // delete this particular user.
});

app.listen(port);
