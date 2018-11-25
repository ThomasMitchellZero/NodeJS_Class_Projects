function emitter(){

// we're giving the emitter() function a property of 'events' 
// with a value of an empty object.
    this.events = {}; 
}

// as best I can tell, this is creating a key called 'on' and giving it a method. These
// are then added to the Emitter object.  Not sure why this is better than just
//including it in the constructor function.

//Right now, emitter.events is an empty object.  This is the function that will 
//populate it.

emitter.prototype.on = function(type, listener){  // 'on' is a common designation for listeners because it reads well



// next line says: take the whatever's the value of that emitter.events and...
// create a new keyword with the name of the 'type' parameter.
// then set it equal to itself (if it exists) or an empty array if it doesn't.
// this is to ensure that listeners of the same type are paired together.

    this.events[type] = this.events[type] || [];  

//this is creates a key from the 'type' parameter in the 'events' object and then gives it the value of the 'listener' parameter.
// it seems that we're going to fill up the array of emitter.events.type with functions.
// I think this works if it has a value, it makes it the value it already is.  
//If that value is null, it makes it an empty array.

    this.events[type].push(listener);

};

// Now we're adding a method called 'emit' which will be how we respond to events.
emitter.prototype.emit = function(type){
    
//checks to see if there's an event of this type in our emitter.events property
//if there is, we're going to run this function.      
    if (this.events[type]){

// find the object with the name that matches the "type" parameter.
// for each instance in the array, run an anonymous function that we will pass
// a parameter called listenerrr,
// take listenerrr and try to invoke it as a function.
        this.events[type].forEach(function(listenerrr){
            listenerrr();
        });
    }

};

//so I think this works because we take the original Emitter method, 
// add all these other properties before the export, and then push out the 
// whole Frankensteined shebang.

module.exports = emitter;