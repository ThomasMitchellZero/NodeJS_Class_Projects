/* The previous example, I4, was all about how to handle routing and 
templates with a template engine.  However, every req was a GET.  
This shows how we deal with other req types, like POST and JSON. */

var express = require('express');

/*loads up the Body Parser module we got from NPM for the purpose
of extracting certain kinds of data from the Body of an HTML request. */

var bodyParser = require('body-parser');

/*when we require 'express', what we get back is a function.  We have
to actually invoke that function to get access to its methods.  Remember,
ANYTHING down below where we're using some .method of app is actually using
Express! */

var app = express();

/*We are going to create a variable for the port so that it can change based
on the specifics of the server it is living in.  We're also using the 
|| 'or' operator to tell Node that if it isn't defined, to use port 3000.
*/
var port = process.env.PORT || 3000;

/* urlencoded is a Content-Type for a post request, just like JSON is.  
This is a method from the bodyParser module we included with require() 
that tells Node how to get the data we want out of the body of a req from
the browser. */
var urlencodedParser = bodyParser.urlencoded({extended: false});

/* Same as above but for JSON */
var jsonParser = bodyParser.json();


/* This tells Express that we will be using EJS as our view engine.
Express will look for the static files (sometimes called 'views') inside 
a folder called 'views'.  This folder is not automatic; you have
to create it by hand. */

app.set('view engine','ejs');


/* This code says: if you get a request with "/assets" in the URL, follow
this path ( in this case, __dirname + "public") and stream back a file
with the same name as whatever comes after the /assets/ in the URL. 

Calling the folder 'public' appears to have no function but it is a 
standard practice.  

A few lessons later, I finally realized what's happening here.  This link
isn't being accessed by anything in this particular program.  It's being 
accessed by href links in the headers of the various HTML pages I'm 
building. Slick!  Can't wait till I know enough to think of 
clever stuff like this...
*/
app.use('/assets', express.static(__dirname + "/public"));


var test = 1;



app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});

/* This says: Express, look in the View folder (/view by default),
find the file you passed me as a parameter ('index') with the file 
extension you specified as the default with app.set above ("ejs").
This is instead of res.render('index.ejs')

Nothing in here uses the string index.ejs

This is nice because if I ever have to change file engines, I don't have
to search the code for every instance of a .ejs file.  I just change the
view engine suffix used in the app.set call.
the view 
*/

app.get('/', function(req, res){
    res.render('index');
});

/* Here's what I think is happening.  The app.get method means that when
this program receives a GET request (from the browser) and the url contains
/person/ followed by ANYTHING, we do a few things.

First, AFAICT, the : character in the URL is sort of like a placeholder.  
It's like "we're going to treat the information we find here differently"
I also think this is an EJS-specific character, not a Node universal.

Second, we run the function that is the second parameter passed to the
app.get() function.  That function is builting the GET response we will
send.  We're about to send an EJS page in response to the request 
(person.ejs in the views folder) In person.ejs, there are two variables
that haven't yet been filled:  ID and QSTR.  That's because we're going
to get their values from the browser req we receive.  

ID is simple - it's whatever is after the /person/ in the URL.  AFAICT,
req.query.qstr is where we check to see if the URL contains this specific
query - ?qstr=xxxxx  If it is not a query, or if the query does not match
what we are asking for (qstr) then the Qstr member will have no value
assigned.

So, if the URL contains a querystring and the name is a match (i.e.
http://localhost:3000/person/tomas?qstr=123 ) then whatever value 
is assigned to qstr gets set as the value for the Qstr name in the 
'person' object.  If it's something like ?abcd instead, that match 
will not be found. */

app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id, Qstr:req.query.qstr });
});

/* when this URL is seen, and it is a POST, then both the urlencodedParser 
(the Body Parser method we defined up top)
and the anonymous function will be run.  In this code, as soon as the 
Submit button is hit on the HTML page, the body parser checks the HTML file
grabs the property for each body listed (although I don't know if it's 
checking id or name) and then assigns each one as a property to the new
'body' object.  
*/

app.post('/person', urlencodedParser, function(req, res){
    res.send("thank you!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

/* When we receive a POST request from /personjson (remember, this is a 
    POST and not a GET, so just typing this URL into the search bar will
    not yield this resut) look for a JSON object in the body of the 
    POST request and then console.log the values of the firstname
    and lastname members contained in the JS*/

app.post('/personjson', jsonParser, function(req,res){
    res.send("thanks for the JSON data!");
    console.log(req.body.firstname);
    console.log(req.body.lastname);

});

app.listen(port);
