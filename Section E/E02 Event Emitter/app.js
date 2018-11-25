var Emitter = require('./emitter.js');

var emtr = new Emitter();

emtr.on('greet', function(){
    console.log('someone says hello.');
});

emtr.on('greet', function(){
    console.log("greeting has occurred");
});

console.log("Hello!");
emtr.emit('greet');