/* I felt smart for the first time today.  The instructor cut/pasted
the two variables below into the code and I was like "But how
will that even work?  The body-parser middleware is being required
in the app.js file, not here. And the very next thing he did
was to cut it out and paste it here.  YASS QUEEN! " */

var bodyParser = require('body-parser');

/* Once I cut the HTML links from the main app and pasted them here
these two variables went grey - they were declared but their values
were never read in the app.js file.  The instructor said to paste
them here, although I'm not sure / nvm, see explanation above.     */

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

/* We are exporting a function that takes a parameter (app).
It could be called anything as long as it matches the parent
to all the HTTP verbs shown below.  ITC, it's app.

The .get, .post, and .delete methods are all methods of Express,
but this will work. In the main app, we've got a variable (also called
'app' that is a call of the Express() function.  We will pass
that variable to this apiController function as its parameter,
so it will essentially be like calling Express().get 

Once that method has been invoked, it will be as though these
links were in the code itself. */


var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

module.exports = function(app){
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

};