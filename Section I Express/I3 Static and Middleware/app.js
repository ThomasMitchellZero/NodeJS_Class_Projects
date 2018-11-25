var express = require('express');
var app = express();

var port = process.env.port || 3000;


/* This code says: if you get a request with "/assets" in the URL, follow
this path ( in this case, __dirname + "public") and stream back a file
with the same name as whatever comes after the /assets/ in the URL. 

Calling the folder 'public' appears to have no function but it is a 
standard practice.  

A few lessons later, I finally realized what's happening here.  This link
isn't being accessed by anything in the .app file.  It's being accessed
by href links in the headers of the various HTML pages I'm building.  
Slick!  Can't wait till I know enough to think of clever stuff like this

AFAICT, we use the .use method for universal operations.  It's not specific
to a particular type of HTTP request like GET or POST.  This function will
be run for ANY kind of HTTP request on the /assets path.  And if NO path is
specified, it just runs whenever the app receives a request, regardless of
path.
*/
app.use('/assets', express.static(__dirname + "/public"));

app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});

/* One thing to note:  This did not work when I had the type in front
of the rel.  Only re-ordering them cause Chrome to apply the 
stylesheet correctly.*/
app.get('/', function(req, res){
    res.send("<html><head><link href=assets/style.css rel=stylesheet type=text/css /></head><body><h1>Hello Dr. Wang!</h1></body></html>");
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

app.listen(3000);


