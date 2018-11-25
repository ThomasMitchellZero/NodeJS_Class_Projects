/* ABICT, this seems to be shitty code that no one would ever use.
It's mostly just to show  */

// We're going to use .emit, which is a method from the events.js library.
var EventEmitter = require('events');

// The .inherits method is found in this library. Confirmed it.
var util = require('util');  

// defines a new function called Greetr.
function Greetr(){

    /* Gives Greetr a key called 'greeting' with a value of "Hello World!"
    Note that 'greeting' is NOT yet a method.  Calling it doesn't
    do anything until we add some actual functionality.*/
    this.greeting = "Hello World!"; 

}



// the .inherits method takes two arguments, a constructor and a
// super-constructor.  It makes the constructor inherit all the properties
// of the super-constructor, then adds the properties of the constructor itself.
util.inherits(Greetr, EventEmitter); 

/* We're using the prototype method on Greetr because it's the only way to
change a parent (Greetr) and add the .greet method we're making */

Greetr.prototype.greet = function(data){

    console.log(this.greeting + ": " + data);

    // IIRC, when you use the 'emit' method, that causes an event with the
    // name specified.  


    // normally Greetr wouldn't e able to use .emit, but it inherited this
    // method from its prototype, EventEmitter, which inherited it from 'events'
    this.emit('greet', data);

    // When we emit the 'greet' event, all the listeners are also going
    // to get whatever was passed to the 'data' parameter.
};

    // using the contstructor to create a child of the Greetr object.
var greeter1 = new Greetr();

    //The .on function listens for an event with the same name ('greet')
    // in this particular case, and then runs whatever function is passed
    // as its second parameter.
greeter1.on('greet', function(data){
    console.log("someone greeted!" + data);
});

greeter1.greet("Tony");