var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + "/public"));

/* This tells Express that we will be using EJS as our view engine.
Express will look for the static files (called 'views') inside 
a folder called 'views'.  This folder is not automatic; you have
to create it by hand. */
app.set('view engine','ejs');

app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});

/* This says: Express, look in the View folder (/view by default),
find the file you passed me as a parameter ('index') with the file 
extension you specified as the default with app.set above ("ejs").

Nothing in here uses the string index.ejs

This is nice because if I ever have to change file engines, I don't have
to search the code for every instance of a .ejs file.  I just change the
view engine suffix used in the app.set call.
the view 
*/
app.get('/', function(req, res){
    res.render('index');
});

/* This is now saying: for anything with /person/xxx in the URL, 
treat the contents of xxx as being a variable called id.
Render them the 'person' page from the default folder (views).

When you do so, fill any instances of EJS tag <% = ID %>  with
the contents of whatever's in the 'id' variable.
    
*/

app.get('/person/:id', function(req, res){
    res.render('person', { ID: req.params.id });
});

app.listen(3000);
