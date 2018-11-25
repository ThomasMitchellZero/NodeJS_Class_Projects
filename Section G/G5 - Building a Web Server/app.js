var http = require("http");

/* 
The goal is to build a string that represents a valid HTTP response.

I actually don't really know how this function works.  I don't know where
the parameters are coming from.  I think they are being sent from the
browser? :/ 
-The anonymous function is a function that will create the stream
I'll be sending back.  */

http.createServer(function(req, res){

    /* 200 is the code for a successful response, */
    res.writeHead(200, {'Content-Type': 'text/plain'});
    /*res.end just means 'this is the last thing I'm sending' */
    res.end('Hello World');

/* the first number is the port.  Port can be any number, 127.0.0.1 is the standard internal IP address.
I think we'll tell the browser to send responses to here. */
}).listen(1337,'127.0.0.1');

/* so when this is run, it doesn't stop.  It just stays there, listening.
When I open a browser and type in this address, the browser gets my
'Hello World' code.  COOOOL!  

The other thing I found is that if the app.js program isn't actively
running, the browser gives a 'This site can't be reached' error if you
try to go to the localhost.1337 port.  As expected!*/