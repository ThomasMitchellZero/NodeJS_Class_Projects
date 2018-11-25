var fs = require("fs");

/* The stream is supposed to fill a buffer up from the greet.text
file that I filled with Lorem Ipsum.  As the buffer fills up with
a chunk of text, it should emit the 'data' event. */
var readable = fs.createReadStream(__dirname + "/greet.txt");

/* we can use the .on method on readable method because readable has
EventEmitter as an ancestor */
readable.on('data', function(chunk){
    /* not completely sure why this works, but it will run the
    console.log method on the contents. */
    console.log(chunk);

});