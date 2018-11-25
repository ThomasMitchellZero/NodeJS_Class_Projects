var greeting = 'hello fuzzybrain';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet:greet // the first greet is the name, the second is the value - in this case, the output of the function named greet. 
};              // Because only the output is being exposed, I have no access to the 'greeting' variable outside the module
                // this is called the "revealing module pattern"