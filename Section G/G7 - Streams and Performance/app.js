var http = require("http");
var fs = require("fs");



http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/html'});

    /* this turns the HTML file into a Read stream and pipes
    it to the response stream.  Instead of pulling the entire
    file into a buffer and then sending it, this sends it out
    one chunk at a time.   */
    fs.createReadStream(__dirname + "/index.htm").pipe(res);


}).listen(1337,'127.0.0.1');

