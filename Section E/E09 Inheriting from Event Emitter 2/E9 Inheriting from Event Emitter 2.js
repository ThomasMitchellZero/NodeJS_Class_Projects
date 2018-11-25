var util = require('util');

/* This might be the key.  This is a function constructor. Running this 
function give an object the firstname and lastname properties and 
the associated values.  But it doesn't do anything UNTIL IT IS RUN.
*/
function Person () {
    this.firstname = "John";
    this.lastname = "Doe";
/** If I place the .greet function in here, it also doesn't work. */

}

Person.prototype.greet = function() {
    console.log('Hello '+ this.firstname + " " + this.lastname);

};

function Policeman() {
    Person.call(this);  // adding this line makes it all work.
    this.badgenumber = "1234";
}

util.inherits(Policeman, Person);

var officer = new Policeman();

/* this returns 'Hello undefined undefined' because the Person
function constructor was never run, so Officer has no firstname
or lastname property.  

However, it DOES have access to the greet function.
*/ 
officer.greet();

    
/* but this DOES work, because we DID run the Policeman function
when creating officer, so officer does have a badge number. */
console.log(officer.badgenumber);
