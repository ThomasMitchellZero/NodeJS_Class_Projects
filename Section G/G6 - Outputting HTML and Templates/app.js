var http = require("http");
var fs = require("fs");



http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});

    /* this pulls in the HTML file.  The 'utf8' parameter converts
    it from a stream into a string so we can manipulate it.  AFAICT
    this is because streams are in binary data and we need to turn
    it into a string in order to manipulate it. */
    var html = fs.readFileSync(__dirname + "/index.htm", 'utf8');
    var message = 'Hello universe!';
    /* Method finds and replaces the first parameter with the second.  
    In this case, our second parameter is a variable so it just grabs
    that variable's contents.  AFAICT, the curly braces don't do anything
    other than ensure that other things called 'message' in the string
    don't get found and replaced by mistake. 
    */
    html = html.replace('{Message}', message);
    res.end(html);


}).listen(1337,'127.0.0.1');