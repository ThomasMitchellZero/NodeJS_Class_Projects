var express = require('express');
var app = express();

/* This is how you specify the environmental variable for a port 
The || is Javascript's logical operator for 'or'. */
var port = process.env.port || 3000;

/* Express has methods that correspond to the names of all the
different HTTP requests.

app.get is a method from the Express library.  The two variables 
shown are the URL and the callback function.  This basically says
"When you recieve a GET request with this particular address
suffix (in this case '/' ) after it, run this function." */

app.get('/', function(req, res){
    res.send("<html><head></head><body><h1>Hello Dr. Wang!</h1></body></html>");
});

app.get('/api', function(req, res){
    res.json({firstname: "John", lastname: "Doe"});
}),

app.listen(3000);

