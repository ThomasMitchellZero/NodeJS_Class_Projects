/* Gets the fs library, which contains stream-related methods */
var fs = require('fs');

/* zlib contains the compression method */
var zlib = require('zlib');

/* makes a readable stream from file "greet.txt" */
var readable = fs.createReadStream(__dirname + '/greet.txt');

/* writes the stream to the file "greetcopy.txt" */
var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

/* writes the stream to the file "greet.txt.gz" this function DOES NOT
do any compressing by itself*/
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

/* when invoked, this function compresses the target file */
var gzip = zlib.createGzip();

/* reads from the "greet.txt" file and then copies that stream to 
greetcopy.txt  Note that this does not work unless we define the 
readable and writable variables with fs.createReadStream and 
fs.createWriteStream, respectively, as we did above. */
readable.pipe(writable);

/* reads the "greet.txt" file and invokes the .gzip() zipping method
on the contents of that stream.  .gzip is both readable and writable,
so we can then .pipe that the function 'compressed' which writes that
compressed stream to the destination file greet.txt.gz
 */
readable.pipe(gzip).pipe(compressed);