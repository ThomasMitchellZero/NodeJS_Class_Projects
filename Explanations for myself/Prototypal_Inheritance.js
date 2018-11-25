var EventEmitter = require('events');
var util = require('util'); 

function Move() {
    this.direction = "forward";
}

var Walk = new Move();
Walk.speed = "fast";

//Move.prototype.stride = "long";  
Object.prototype.stride = "long";

console.log(Walk.direction);
console.log(Walk.speed);
console.log(Walk.stride);
console.log(Move.stride);








/** 
var EventEmitter = require('events');
var util = require('util');  

function Greetr(){
    this.greeting = "Hello World!"; 
}

util.inherits(Greetr, EventEmitter); 

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ": " + data);
    this.emit('greet', data);
};

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log("someone greeted!" + data);
});

greeter1.greet("Tony");

*/