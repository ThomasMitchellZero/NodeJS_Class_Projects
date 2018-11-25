var http = require("http");
var fs = require("fs");



http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj = {
        firstname: 'John',
        lastname: 'Doe',
    };

    /* So the tricky thing is that to travel via HTTP, this needs to be
    a string.  The object 'obj' is a Javascript object.  If you send it,
    all the browser sees is a name of object with a value of Object.
    It's not in a format that the browser recognizes as an object with members.
    
    For this to work, that object needs to be converted to JSON.  The 
    JSON.stringify() method does this for us.*/

    var html = fs.readFileSync(__dirname + "/index.htm");
    res.end(JSON.stringify(obj));


}).listen(1337,'127.0.0.1');