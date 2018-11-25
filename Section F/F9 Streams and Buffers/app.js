var fs = require('fs');

/* The stream is supposed to fill a buffer up from the greet.text
file that I filled with Lorem Ipsum.  As the buffer fills up with
a chunk of text, it should emit the 'data' event. */

/* Just a quick aside on how this works.  We made the 'fs' library 
available to us with the 'require' method.  We made a new variable,
readable, and set it equal to the result of calling the 
createReadStream method from fs.  We passed it a path (__dirname + 
"/greet.txt" to tell it what file to draw the information from.
highWaterMark tells it how big should be before it is passed on
to be processed. */
var readable = fs.createReadStream(__dirname + "/greet.txt", {encoding:
    "utf8" , highWaterMark: 16*1024});

var writable = fs.createWriteStream(__dirname + "/greetcopy.txt");

/* we can use the .on method on readable method because readable has
EventEmitter as an ancestor */
readable.on('data', function(chunk){
    /* .on is a method of EventEmitter, which createReadStream inherits
    from.  This is an event emitter.  createReadStream emits the event
    'data' when the buffer is filled, and then the second parameter
    is the listener (the function we run when the event occurs)  In this
    case, when the buffer fills up, we console.log that particular
    buffer's contents adn then run the .write method on the contents as
    well.  It then repeats until it has processed the entire file.
    */
    console.log(chunk);
    writable.write(chunk);

});

/* OK, this is kind of weird.  Everything else is working except the
callback.  I can get the call back to do a simple console.log('hi!)
so readable is detecting the 'data' event just fine.  I can also log
chunk.length and it comes to 60384, which is what you expect from a 60kb
UTF-8 file.  So it's clearly able to read chunk.  Oh.  And it can turn
it to a string.  So why won't it just show the characters?
log it?  Grr. */

