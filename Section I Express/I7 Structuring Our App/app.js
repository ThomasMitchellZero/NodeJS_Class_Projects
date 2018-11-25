/* at the start, this program is working. */

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

/*This goes and gets the API controller module from the 
/controllers folder */
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/hmtlController');

app.set('view engine','ejs');

app.use('/assets', express.static(__dirname + "/public"));

app.use('/', function(req, res, next){
    console.log('Request URL' + req.url);
    next();
});



/* Here, we are invoking(?) the apiController module that we defined
in an external module of the same name, and passing it the parameter
(app) that is our variable containing an Express call.  This way, the
module will call Express before calling the various methods for HTTP
verbs in the apiController module. 
*/

apiController(app);
htmlController(app);


app.listen(port);
