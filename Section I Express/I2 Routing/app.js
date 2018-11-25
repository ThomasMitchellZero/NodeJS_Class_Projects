var express = require('express');

/*when we require 'express', what we get back is a function.  We have
to actually invoke that function to get access to its methods. */
var app = express();

/*We are going to create a variable for the port so that it can change based
on the specifics of the server it is living in.  We're also using the 
|| 'or' operator to tell Node that if it isn't defined, to use port 3000.
 */

var port = process.env.PORT || 3000;

/* Express has methods that correspond to all the HTTP verbs.  In
this case, we are using the .get method, which tells Node to respond
to GET requests to the specified URL, '/' in this case.


*/
app.get('/', function(req, res){
    res.send("<html><head></head><body><h1>Hello Dr. Wang!</h1></body></html>");
});


/* The colon in the URL tells Node that what follows it could be anything
It's a variable for URLs. 

To use it in the script, use the req.params.x method, where x is the variable
you are using. */
app.get('/person/:id', function(req, res){
    res.send("<html><head></head><body><h1>Person: "+
    req.params.id +"</h1></body></html>");
});



app.get('/api', function(req, res){
    res.json({firstname: "John", lastname: "Doe"});
}),

/* Using .listen method of Express to listen at at the
contents of the 'port' variable. */

app.listen(port);


